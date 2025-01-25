<template>
  <article>

    <header>
      <h3 id="on-boot-with-systemd">On Boot With Systemd</h3>
      <p>What if you had a program that you wanted to set up (e.g., <a href="https://github.com/Turner-Kendall/logit/blob/main/main.go">`logit`</a> ) to run at boot using
        <strong>systemd</strong> and
        ensure the program can access a file with the correct permissions? If you are using Debian or one of its
        descendants ( or another systemd linux - SELinux?) read on =>
      </p>
    </header>


    <h2 id="1-create-the-systemd-service-file">1. <strong>Create the Systemd Service File</strong></h2>
    <p>Create a <strong>systemd</strong> service file to run your program on boot.</p>
    <ol>
      <li>
        <p><strong>Create the service file:</strong></p>
        <pre><code class="language-bash">sudo nano /etc/systemd/system/logit.service
</code></pre>
      </li>
      <li>
        <p><strong>Service file contents:</strong></p>
        <pre><code class="language-ini">[Unit]
Description=Run logit at system boot

[Service]
ExecStart=/usr/local/bin/logit
User=root
Group=root
<!-- Restart=always
RemainAfterExit=yes -->

[Install]
WantedBy=multi-user.target
</code></pre>
        <ul>
          <li><code>ExecStart</code>: Path to your executable (e.g., <a href=""></a> <code>/usr/local/bin/logit</code>) </li>
          <li><code>User</code> and <code>Group</code>: Ensure the program runs as the correct user and group (usually
            <code>root</code>).
          </li>
          <li>
            <strike><code>
              Restart=always</code>: Ensures the program restarts if it crashes.</strike>
          </li>
          <li><strike>
              <code>RemainAfterExit=yes</code>: Keeps the service active even if the program exits.
            </strike></li>
        </ul>
      </li>
    </ol>
    <p>I included the last 2 paramaters for reference. Since I only want this to run at boot I did not include
      then in the service file for this use case. Here's why you should use <a href="https://unix.stackexchange.com/questions/4186/what-is-usr-local-bin">/usr/local/bin</a>  if you are interested.
    </p>
    <h2 id="2-set-permissions-for-log-directory-and-file">2. <strong>Set Permissions for Log Directory and File</strong>
    </h2>
    <p>Ensure the log directory and file are writable by your program. <strong>Do not</strong>
      forget the sticky bit.</p>

    <ol>
      <li>
        <p><strong>Make the directory world-writable (with sticky bit):</strong></p>
        <pre><code class="language-bash">sudo chmod 1777 /log
</code></pre>
        <p>This ensures anyone can write to the directory, but only the file owner can delete it.</p>
      </li>
      <li>
        <p><strong>Make the log file writable by everyone:</strong></p>
        <pre><code class="language-bash">sudo chmod 666 /log/logit.txt
</code></pre>
        <p>This grants read and write permissions for all users.</p>
      </li>
      <li>
        <p><strong>Verify the permissions:</strong></p>
        <pre><code class="language-bash">ls -ld /log
ls -l /log/logit.txt
</code></pre>
        <p>Example output:</p>
        <ul>
          <li><code>/log</code> directory: <code>drwxrwxrwt 2 root root 4096 Dec 16 10:00 /log</code></li>
          <li><code>logit.txt</code> file: <code>-rw-rw-rw- 1 root root 0 Dec 16 10:36 /log/logit.txt</code></li>
        </ul>
      </li>
    </ol>
    <h2 id="3-enable-and-start-the-service">3. <strong>Enable and Start the Service</strong></h2>
    <ol>
      <li>
        <p><strong>Reload the systemd daemon</strong> to apply changes:</p>
        <pre><code class="language-bash">sudo systemctl daemon-reload
</code></pre>
      </li>
      <li>
        <p><strong>Enable the service to run at boot:</strong></p>
        <pre><code class="language-bash">sudo systemctl enable logit.service
</code></pre>
      </li>
      <li>
        <p><strong>Start the service immediately:</strong></p>
        <pre><code class="language-bash">sudo systemctl start logit.service
</code></pre>
      </li>
      <li>
        <strike>
          <p><strong>Check the status</strong> to ensure the service is running correctly:</p>
          <pre><code class="language-bash">sudo systemctl status logit.service
</code></pre>
        </strike>
      </li>
    </ol>
    <h2 id="4-troubleshooting">4. <strong>Troubleshooting</strong></h2>
    <p>If you encounter issues (e.g., permission denied), ensure the following:</p>
    <ol>
      <li>
        <p><strong>Directory permissions:</strong>
          Ensure <code>/log</code> has the correct permissions (<code>chmod 1777 /log</code>).</p>
      </li>
      <li>
        <p><strong>File permissions:</strong>
          Ensure the log file is writable by all users (<code>chmod 666 /log/logit.txt</code>).</p>
      </li>
      <li>
        <p><strong>Ownership:</strong>
          If necessary, set the correct ownership:</p>
        <pre><code class="language-bash">sudo chown root:root /log/logit.txt
</code></pre>
      </li>
      <li>
        <p><strong>Check the service logs:</strong></p>
        <pre><code class="language-bash">sudo journalctl -u logit.service
</code></pre>
      </li>
      <li>
        <p><strong>SELinux or AppArmor:</strong>
          If you are using SELinux or AppArmor, ensure they are not restricting access to the log file or directory.
          I've only tested this method on Debian as that is all I ever use.</p>
      </li>
    </ol>
    <hr>



    <footer>
      <h2 id="coda"><strong>Coda</strong></h2>

      <p><a href="https://github.com/Turner-Kendall/logit/blob/main/main.go">Here is the code to the logit script.</a> Hopefully between this article and this file you can see what I am trying
        to describe. I created a binary ( go build
        ) using this code and call it from a number of different progarms as well as at boot with systemd.
      </p>

      <p> <strong>I Will add a note to the log file to help track what called it: </strong></p>

      <pre><code>
 logit error:OtherScript
</code></pre>

      <p><strong> I have so many things calling it now that I often </strong></p>

      <pre><code>
 tail -f /log/logit.txt
</code></pre>

      <p>
        😼
      </p>


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