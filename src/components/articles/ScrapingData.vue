<template>
  <article>

    <header>
      <h3 id="llm-token-metadata">Scraped CSVs</h3>
      <p>Scraped CSVs are like the Wild West — rogue line breaks, weird encodings (BOMs, non-breaking spaces), invisible
        Unicode, and malformed quotes all come with the territory.
      </p>
    </header>

    <h3 id="-what-scraping-teaches-us-"><strong>Abandon all hope, ye who enter here</strong></h3>
    <p><strong>Scraping is ugly; Expect chaos.</strong> </p>

    <p>Web content isn&#39;t &quot;CSV-aware&quot; and is generally formatted for display, not data export. Scrapers
      grab <strong>raw, unstructured content</strong> — line breaks, bad encodings, and weird whitespace are inevitable.
      CSV parsers have rules, scraped data doesn't. CSV parsers expect a &quot;contract&quot; (consistent delimiters,
      quote rules, etc.).Scraped data <strong>violates that contract</strong> constantly. So we have to be the
      &quot;fixer&quot; before CSV parsers even see the data.</p>

    <h4>My strategy</h4>
    <p><strong>I Pre-process the raw data</strong>:
      Fix bad line breaks, quotes, BOMs, fancy quotes, extra spaces, etc. I do <strong>everything</strong> that I can do
      before I ever even hand it off to a csv library. Most packages expect well structured data, scraped data is rarely
      so.
      By <strong>cleaning before parsing</strong>, we're creating a &quot;defensible perimeter&quot; for CSV parsers.
      It's really just a question of <strong>refining the logic</strong> for all of the possible contingencies and
      adding new ones as you discover them.
    </p>

    <hr>

    <h4 id="issues">Detailed Issues:</h4>
    <ul>
      <li>Remove &quot;zero-width spaces&quot; (<code>\u200B</code>, <code>\uFEFF</code>), which often slip into
        web-scraped text. </li>
      <li>Catch weird newlines (<code>\r</code>, <code>\n</code>, <code>\r\n</code>, and even <code>\u2028</code> from
        web content). </li>

      <li><strong>Handle Line Continuation Smartly</strong></li>
      <ul>
        <li>If a line <strong>does not start with a quote</strong> and the previous line doesn&#39;t &quot;look
          finished&quot; (no comma, no quote closure), <strong>merge it</strong>. </li>
        <li>If a line has &quot;fewer commas&quot; than expected, it&#39;s probably a continuation. </li>
        <li><strong>Track number of delimiters</strong> (like commas) to know if a line &quot;belongs&quot; to a prior
          one. </li>
      </ul>

      <li>If you&#39;re not always working with <strong>,</strong> as the delimiter, you can detect
        it.<br><strong>How?</strong> Count the number of commas, semicolons, or pipes (<code>|</code>) on the first few
        lines and pick the most common one. </li>


      <li>Scraped content can sometimes have <strong>HTML-encoded characters</strong> (<code>&amp;quot;</code>,
        <code>&amp;nbsp;</code>).
      </li>

    </ul>

    <hr>

    <h4 id="issues">Detailed Strategies:</h4>

    <ul>
      <li><strong>Normalize Line Breaks</strong> - Convert <code>\r\n</code>, <code>\r</code>, <code>\u2028</code>,
        etc., to simple <code>\n</code>. </li>
      <li>Remove zero-width spaces, BOMs, and other invisible Unicode. </li>
      <li>If a line <strong>does not start with a quote</strong> and the <strong>previous line looks
          unfinished</strong>, merge it. </li>
      <li>If the current line has <strong>fewer delimiters than normal</strong>, merge it into the previous line. </li>
      <li>Replace curly quotes (<code>“</code>, <code>”</code>, <code>‘</code>, <code>'</code>) with straight quotes.
      </li>
      <li>Replace curly quotes (<code>“</code>, <code>”</code>, <code>‘</code>, <code>'</code>) with straight quotes.
      </li>
    </ul>

    <hr>
    <h3 id="-dream-script-combines-all-these-ideas-"><strong>One Aproach</strong></h3>
    <pre><code class="lang-javascript"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">"fs"</span>).promises;
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">"path"</span>);

<span class="hljs-keyword">const</span> DATA_DIR = path.resolve(__dirname, <span class="hljs-string">"./data/new"</span>);
<span class="hljs-keyword">const</span> OUTPUT_DIR = path.resolve(__dirname, <span class="hljs-string">"./data/processed"</span>);

<span class="hljs-comment">// Create output directory if it doesn't exist</span>
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ensureOutputDirectory</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">await</span> fs.mkdir(OUTPUT_DIR, { <span class="hljs-attr">recursive</span>: <span class="hljs-literal">true</span> });
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`📁 Output directory ready at: <span class="hljs-subst">${OUTPUT_DIR}</span>`</span>);
  } <span class="hljs-keyword">catch</span> (error) {
    <span class="hljs-built_in">console</span>.error(<span class="hljs-string">`❌ Failed to create output directory:`</span>, error);
    process.exit(<span class="hljs-number">1</span>);
  }
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cleanScrapedCSV</span>(<span class="hljs-params">rawData</span>) </span>{
  <span class="hljs-keyword">const</span> lines = rawData
    .replace(<span class="hljs-regexp">/\r\n|\r|\u2028/g</span>, <span class="hljs-string">'\n'</span>) <span class="hljs-comment">// Normalize all newlines to \n</span>
    .replace(<span class="hljs-regexp">/[\uFEFF\u200B]/g</span>, <span class="hljs-string">''</span>)  <span class="hljs-comment">// Remove BOM and zero-width spaces</span>
    .split(<span class="hljs-string">"\n"</span>);

  <span class="hljs-keyword">const</span> mergedLines = [];
  <span class="hljs-keyword">let</span> buffer = <span class="hljs-string">''</span>; 
  <span class="hljs-keyword">let</span> expectedDelimiters = <span class="hljs-number">0</span>;

  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> line <span class="hljs-keyword">of</span> lines) {
    <span class="hljs-keyword">const</span> cleanLine = line.trim();
    <span class="hljs-keyword">const</span> delimiterCount = (cleanLine.match(<span class="hljs-regexp">/,/g</span>) || []).length; <span class="hljs-comment">// Count commas</span>

    <span class="hljs-comment">// **Guess the number of expected delimiters**</span>
    <span class="hljs-keyword">if</span> (mergedLines.length &lt; <span class="hljs-number">5</span> &amp;&amp; delimiterCount &gt; expectedDelimiters) {
      expectedDelimiters = delimiterCount; <span class="hljs-comment">// "Lock in" how many delimiters a row should have</span>
    }

    <span class="hljs-comment">// **If the buffer is active, keep collecting lines**</span>
    <span class="hljs-keyword">if</span> (buffer) {
      buffer += <span class="hljs-string">' '</span> + cleanLine;
      <span class="hljs-keyword">const</span> countCommas = (buffer.match(<span class="hljs-regexp">/,/g</span>) || []).length;

      <span class="hljs-keyword">if</span> (countCommas &gt;= expectedDelimiters) {
        mergedLines.push(buffer);
        buffer = <span class="hljs-string">''</span>;
      }
    } 
    <span class="hljs-comment">// **If this line has fewer commas than expected, assume it's a continuation**</span>
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (delimiterCount &lt; expectedDelimiters) {
      buffer = cleanLine;
    } 
    <span class="hljs-comment">// **Normal line, no issues, add to list**</span>
    <span class="hljs-keyword">else</span> {
      mergedLines.push(cleanLine);
    }
  }

  <span class="hljs-comment">// If there's still data in the buffer, add it (failsafe)</span>
  <span class="hljs-keyword">if</span> (buffer) {
    mergedLines.push(buffer);
  }

  <span class="hljs-keyword">return</span> mergedLines
    .join(<span class="hljs-string">"\n"</span>)
    .replace(<span class="hljs-regexp">/'/g</span>, <span class="hljs-string">"'"</span>)
    .replace(<span class="hljs-regexp">/“|”/g</span>, <span class="hljs-string">'"'</span>)
    .replace(<span class="hljs-regexp">/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000]/g</span>, <span class="hljs-string">' '</span>)
    .trim();
}

<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">processFile</span>(<span class="hljs-params">filePath, outputFilePath</span>) </span>{
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">const</span> rawData = <span class="hljs-keyword">await</span> fs.readFile(filePath, <span class="hljs-string">"utf8"</span>);
    <span class="hljs-keyword">const</span> cleanedData = cleanScrapedCSV(rawData);
    <span class="hljs-keyword">await</span> fs.writeFile(outputFilePath, cleanedData, <span class="hljs-string">"utf8"</span>);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`✅ Processed and saved: <span class="hljs-subst">${outputFilePath}</span>`</span>);
  } <span class="hljs-keyword">catch</span> (error) {
    <span class="hljs-built_in">console</span>.error(<span class="hljs-string">`❌ Error processing file <span class="hljs-subst">${filePath}</span>:`</span>, error);
  }
}

<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">processAllFiles</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">const</span> files = <span class="hljs-keyword">await</span> fs.readdir(DATA_DIR);
    <span class="hljs-keyword">const</span> csvFiles = files.filter(<span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> path.extname(file).toLowerCase() === <span class="hljs-string">".csv"</span>);

    <span class="hljs-keyword">if</span> (csvFiles.length === <span class="hljs-number">0</span>) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"⚠️ No CSV files found in the data directory."</span>);
      <span class="hljs-keyword">return</span>;
    }

    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`📂 Found <span class="hljs-subst">${csvFiles.length}</span> CSV files to process.`</span>);

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> file <span class="hljs-keyword">of</span> csvFiles) {
      <span class="hljs-keyword">const</span> inputFilePath = path.join(DATA_DIR, file);
      <span class="hljs-keyword">const</span> outputFilePath = path.join(OUTPUT_DIR, file);

      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`🔄 Processing file: <span class="hljs-subst">${file}</span>`</span>);
      <span class="hljs-keyword">await</span> processFile(inputFilePath, outputFilePath);
    }
  } <span class="hljs-keyword">catch</span> (error) {
    <span class="hljs-built_in">console</span>.error(<span class="hljs-string">`❌ Error reading directory <span class="hljs-subst">${DATA_DIR}</span>:`</span>, error);
  }
}

(<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">main</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">await</span> ensureOutputDirectory();
  <span class="hljs-keyword">await</span> processAllFiles();
})();
</code></pre>
    <p>Every scrape is different, and the resulting data will ultimately determine how you need to process it to clean
      it up. This script represents an effort to work with a certain project that is well documented on my <a
        href="https://x.com/turnerkendall3">X</a></p>
    <ol>
      <li>
        <p><strong>Delimiters Detected</strong>: </p>
        <ul>
          <li>We &quot;learn&quot; how many commas are expected in each row. </li>
          <li>If the current row has <strong>fewer commas than expected</strong>, it's part of the previous line. </li>
        </ul>
      </li>
      <li>
        <p><strong>Invisible Characters Removed</strong>: </p>
        <ul>
          <li>Removes BOM, zero-width spaces, and normalizes newlines. </li>
        </ul>
      </li>
      <li>
        <p><strong>More Accurate Merging</strong>: </p>
        <ul>
          <li>If a line looks like it continues (based on missing delimiters), it's merged with the previous line. </li>
        </ul>
      </li>
      <li>
        <p><strong>Failsafe</strong>: </p>
        <ul>
          <li>If something is still in the buffer, we push it at the end. </li>
        </ul>
      </li>
    </ol>

    <footer>
      <h2 id="coda"><strong>Coda</strong></h2>

      <p>Scraped CSVs are chaos, but <strong>this is my strategy for a single project</strong>. Next week I'll post an
        article about <strong>error-proofing logic</strong> for those especially wild edge cases. 🚀</p>
      <blockquote>
        <p><strong>Pro-tip:</strong> Save a few of your worst &quot;nightmare&quot; CSVs. Those are gold for debugging
          and future-proofing your logic.</p>
      </blockquote>
      😼
    </footer>
  </article>
</template>


<style scoped>
table {
  margin-bottom: 3rem;
}

ol ul {
  margin-bottom: 2rem;
}
</style>