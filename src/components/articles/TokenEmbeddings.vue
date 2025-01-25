<template>
  <article>
    <header>
      <h3 id="llm-token-metadata"> LLM Token Metadata </h3>
      <p>So I found myself asking if you can pass additional metadata or parameters
        alongside each token to give a LLM more context or useful information beyond
        just the tokens themselves.
      </p>
    </header>

    <p>When you tokenize text, instead of just representing tokens as simple indices (like &quot;dog&quot; = 24,
      &quot;cat&quot; = 13), you can pass in extra metadata that can be embedded and used in the model. Here are some
      possible additional parameters you could pass:</p>

    <table>
      <thead>
        <tr>
          <th><strong>Feature</strong></th>
          <th><strong>Description</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Position Embedding</strong></td>
          <td>The position of a token in the sequence used in GPT.</td>
        </tr>
        <tr>
          <td><strong>Part-of-Speech (POS) Tag</strong></td>
          <td>Tags like Noun, Verb, Adjective; helps disambiguate meaning.</td>
        </tr>
        <tr>
          <td><strong>Syntactic Tree</strong></td>
          <td>Relation of tokens to each other (e.g., dependency parsing)</td>
        </tr>
        <tr>
          <td><strong>Named Entity Tag</strong></td>
          <td>Is this a &quot;person&quot;, &quot;place&quot;, &quot;organization&quot;?</td>
        </tr>
        <tr>
          <td><strong>Sentence Embedding</strong></td>
          <td>Embedding of the entire sentence this token belongs to</td>
        </tr>
        <tr>
          <td><strong>Speaker Embedding</strong></td>
          <td>Identifies the speaker in dialogue models.</td>
        </tr>
        <tr>
          <td><strong>Time/Date Information</strong></td>
          <td>If the token is part of a date/time context.</td>
        </tr>
        <tr>
          <td><strong>Custom Domain Info</strong></td>
          <td>Embedding of the &quot;domain&quot; (e.g., medical, legal)</td>
        </tr>
        <tr>
          <td><strong>Style/Politeness</strong></td>
          <td>Is the tone formal, informal, polite, rude, etc.</td>
        </tr>
        <tr>
          <td><strong>Language Indicator</strong></td>
          <td>Is this token English, Spanish, etc.?</td>
        </tr>

      </tbody>
    </table>

    <h2 id="-2-how-do-you-pass-parameters-to-tokens-"><strong>How Do You Pass Parameters to Tokens?</strong></h2>

    <p>There are a few ways to &quot;attach&quot; information to tokens.</p>
    <h3 id="-1-concatenation-add-extra-dimensions-to-token-embeddings-"><strong>Concatenation (Add dimensions)</strong>
    </h3>
    <p>Instead of using a simple 1D vector to represent a token, you extend the dimension to hold additional
      information. If your token embeddings are typically vectors of size <code>(d_model)</code>, you can concatenate
      extra features
      (like a Part-of-Speech tag or a NER label) along with them.</p>

    <pre><code class="hljs"><span class="hljs-selector-tag">Original</span> <span class="hljs-selector-tag">Token</span> <span class="hljs-selector-tag">Embedding</span>: <span class="hljs-selector-attr">[0.12, -0.45, 0.67]</span>  (dim = <span class="hljs-number">3</span>)
<span class="hljs-selector-tag">Extra</span> <span class="hljs-selector-tag">Metadata</span> (POS Tag):  <span class="hljs-selector-attr">[0, 1, 0, 0]</span>         (One-hot encoded POS tag)
<span class="hljs-selector-tag">Concatenated</span> <span class="hljs-selector-tag">Vector</span>:       <span class="hljs-selector-attr">[0.12, -0.45, 0.67, 0, 1, 0, 0]</span> (dim = <span class="hljs-number">3</span> + <span class="hljs-number">4</span> = <span class="hljs-number">7</span>)
</code></pre>

    <p>This new &quot;extended embedding&quot; is then fed into the model, which learns to process both the token info
      <strong>and the additional metadata</strong>. This works well if the additional info is discrete/categorical (like
      a POS tag or NER label) or if
      you have multiple sources of context for each token.
    </p>
    <p>However if the metadata has too many categories concatenation will cause embeddings to explode in size. It
      increases model size, memory, and compute cost. </p>

    <hr>
    <h3 id="-2-sum-combine-extra-embeddings-learnable-embeddings-"><strong>Combine Embeddings (Learnable
        Embeddings)</strong></h3>
    <p>Another approach is to create <strong>independent embeddings</strong> for each parameter (like position, NER,
      etc.) and <strong>add them together</strong> at the token level. You embed <strong>each type of metadata
        separately</strong>.
      Then you sum the token embedding with the auxiliary embeddings.
    </p>

    <pre><code class="hljs">
  Token Embedding:  <span class="hljs-comment">[0.12, -0.45, 0.67]</span> 
  Position Embed:   <span class="hljs-comment">[0.01, 0.03, -0.02]</span> 
  NER Embedding:    <span class="hljs-comment">[0.10, -0.01, 0.05]</span> 

Combined Embedding = <span class="hljs-comment">[0.12, -0.45, 0.67]</span> 
                    + <span class="hljs-comment">[0.01, 0.03, -0.02]</span> 
                    + <span class="hljs-comment">[0.10, -0.01, 0.05]</span> 
                    -------------------------
                    = <span class="hljs-comment">[0.23, -0.43, 0.70]</span>
</code></pre>
    <p>This method is used in <strong>transformers</strong> for <strong>position embeddings</strong> and <strong>segment
        embeddings</strong>. It's best to use this approach If you want to combine multiple &quot;orthogonal&quot;
      types of information. It can also be appropriate when If you have embeddings that are the <strong>same
        size</strong>
      as token embeddings.</p>

    <hr />

    <h3 id="-3-use-attention-to-incorporate-extra-info-">
      <strong>Use Attention to Incorporate Extra Info</strong>
    </h3>
    <p>Rather than attaching info to each token, you use <strong>attention mechanisms</strong> to decide which parts of
      the auxiliary info should influence the token embeddings. This approach was revolutionary and presented in the paper: 
    <a href="https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf">Attention Is All You Need</a>.</p>
    <h4 id="-how-it-works-"><strong>Here's how it works:</strong></h4>
    <ul>
      <li>Pass your additional features (like sentence embedding) as a &quot;memory&quot; input into the transformer.
      </li>
      <li>Let the tokens &quot;attend&quot; to this memory. </li>
    </ul>
    <p>This is <strong>exactly how ChatGPT knows who the &quot;user&quot; and &quot;assistant&quot; are</strong> — the
      model doesn&#39;t have &quot;user&quot; baked into the vocabulary. Instead, &quot;user&quot; and
      &quot;assistant&quot; are <strong>special tokens that are attended to separately</strong>.</p>

    <p>If you look at modern LLMs (like GPT, BERT, or LLaMA), they use <strong>some of these techniques
        combined</strong>.</p>
    <table>
      <thead>
        <tr>
          <th><strong>LLM</strong></th>
          <th><strong>Extra Info Used</strong></th>
          <th><strong>Method Used</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>GPT-3/4</strong></td>
          <td>Role (user, assistant)</td>
          <td>Concatenation / Attention</td>
        </tr>
        <tr>
          <td><strong>BERT</strong></td>
          <td>Sentence Position (A, B)</td>
          <td>Sum of Embeddings</td>
        </tr>
        <tr>
          <td><strong>T5</strong></td>
          <td>Task Instructions</td>
          <td>Embedded as Input Tokens</td>
        </tr>
        <tr>
          <td><strong>ChatGPT</strong></td>
          <td>User/Assistant Context</td>
          <td>Learned Token Embeddings</td>
        </tr>
        <tr>
          <td><strong>Multilingual LLMs</strong></td>
          <td>Language Indicator</td>
          <td>Token Embedding</td>
        </tr>
      </tbody>
    </table>

    <hr>

    <p>Lets say, for example, you want to build an LLM that knows the &quot;speaker&quot; of a message (like &quot;User&quot; or
      &quot;Bot&quot;). Here&#39;s how you&#39;d <strong>add speaker embeddings</strong>.</p>


    <p> <strong>Step 1: Token Embedding</strong> - Each token in the text is converted to an embedding.</p>

    <p><strong>Step 2: Speaker Embedding</strong> - Each token is assigned a <strong>speaker embedding</strong> (e.g.,
      &quot;user&quot; or &quot;bot&quot;). These
      embeddings are added to the token embeddings.</p>

<pre><code class="lang-python hljs">import torch
import torch.nn as nn

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CustomTransformer</span>(<span class="hljs-title">nn</span>.<span class="hljs-title">Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(<span class="hljs-keyword">self</span>, vocab_size, d_model, speaker_count)</span></span>:
        <span class="hljs-keyword">super</span>().__init_<span class="hljs-number">_</span>()
        <span class="hljs-keyword">self</span>.token_embedding = nn.Embedding(vocab_size, d_model)
        <span class="hljs-keyword">self</span>.position_embedding = nn.Embedding(<span class="hljs-number">512</span>, d_model)  <span class="hljs-comment"># For position</span>
        <span class="hljs-keyword">self</span>.speaker_embedding = nn.Embedding(speaker_count, d_model)  <span class="hljs-comment"># e.g., user = 0, bot = 1</span>
        <span class="hljs-keyword">self</span>.transformer = nn.Transformer(d_model)

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span><span class="hljs-params">(<span class="hljs-keyword">self</span>, tokens, speaker_ids)</span></span>:
        token_embed = <span class="hljs-keyword">self</span>.token_embedding(tokens)  <span class="hljs-comment"># (batch, seq_len, d_model)</span>
        position_embed = <span class="hljs-keyword">self</span>.position_embedding(torch.arange(tokens.size(<span class="hljs-number">1</span>)))
        speaker_embed = <span class="hljs-keyword">self</span>.speaker_embedding(speaker_ids)  <span class="hljs-comment"># (batch, seq_len, d_model)</span>

        combined = token_embed + position_embed + speaker_embed
        output = <span class="hljs-keyword">self</span>.transformer(combined)
        <span class="hljs-keyword">return</span> output
</code></pre>



    <footer>
      <h2 id="-key-takeaways-"><strong>Coda</strong></h2>
      <p>This is a living document, it's my cheat sheet as I explore this concept. At this point it just scratches the surface but does
        answer the original question I had.  Here here are my key takeaways so far:</p>
      <ul>
        <li>You <strong>can pass extra info</strong> alongside tokens (like POS tags, speaker, or custom features).
        </li>
        <li>Use <strong>concatenation</strong> if you want to make embeddings bigger. </li>
        <li>Use <strong>summation</strong> if you want to keep the embedding size the same. </li>
        <li>Use <strong>attention</strong> if you want the model to &quot;look at&quot; these auxiliary features. </li>
      </ul>
      <p>Watch this space as I document my efforts creating an all new LLM based on the data that I have been scrapin... err, collecting for the 
        last half a dozen years or longer.
      </p>
      😼
    </footer>
  </article>
</template>


<style scoped>
table {
  margin-bottom: 3rem;
}
</style>