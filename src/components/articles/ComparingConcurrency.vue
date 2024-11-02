<template>
  <article>
    <header>
      <h3 id="concurrency-in-javascript-go-and-rust">
        Concurrency Comparison
      </h3>
      <p>Concurrency is a core concept in programming languages, allowing tasks to run independently or in parallel.
        Here's an overview of how JavaScript, Go, and Rust handle concurrency, focusing on syntax, paradigms, and
        typical use cases.</p>
    </header>

    <h2 id="1-javascript">1. JavaScript</h2>
    <p>JavaScript's concurrency model is built around the <strong>event loop</strong> and <strong>async/await</strong>
      keywords. It uses a <strong>single-threaded, non-blocking</strong> model, where asynchronous tasks are handled
      through promises and callbacks.</p>
    <h3 id="key-features">Key Features</h3>
    <ul>
      <li><strong>Event Loop</strong>: Manages asynchronous operations without blocking the main thread.</li>
      <li><strong>Promises</strong>: Represent the eventual completion (or failure) of an asynchronous operation.</li>
      <li><strong>async/await</strong>: Provides syntactic sugar for promises, allowing for more readable asynchronous
        code.</li>
    </ul>
    <h3 id="example">Example</h3>
    <pre><code class="language-javascript">async function fetchData(url) {
  try {
    const response = await fetch(url);  // Non-blocking
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(&quot;Error fetching data:&quot;, error);
  }
}

fetchData(&quot;https://api.example.com/data&quot;);
</code></pre>
    <h3 id="summary">Summary</h3>
    <p>JavaScript concurrency is ideal for <strong>I/O-bound tasks</strong> (e.g., API calls, file reads), as its
      non-blocking model can handle many tasks efficiently without multithreading.</p>
    <hr>
    <h2 id="2-go">2. Go</h2>
    <p>Go is designed with concurrency in mind, using <strong>goroutines</strong> and <strong>channels</strong> for
      managing concurrent tasks. Goroutines are lightweight threads that allow Go to handle many tasks simultaneously
      with low overhead.</p>
    <h3 id="key-features-1">Key Features</h3>
    <ul>
      <li><strong>Goroutines</strong>: Lightweight functions or methods that run concurrently with other goroutines.
      </li>
      <li><strong>Channels</strong>: Used for communication between goroutines, enabling safe data sharing.</li>
      <li><strong>sync Package</strong>: Provides utilities like <code>sync.WaitGroup</code> for managing goroutine
        execution order and data integrity.</li>
    </ul>
    <h3 id="example-1">Example</h3>
    <pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;time&quot;
)

func fetchData() {
    time.Sleep(2 * time.Second)  // Simulate a delay
    fmt.Println(&quot;Data fetched&quot;)
}

func main() {
    go fetchData()  // Start goroutine
    fmt.Println(&quot;Waiting for data...&quot;)
    time.Sleep(3 * time.Second)  // Ensure main doesn&#39;t exit before goroutine completes
}
</code></pre>
    <h3 id="summary-1">Summary</h3>
    <p>Go's concurrency model is well-suited for <strong>CPU-bound</strong> or <strong>I/O-bound tasks</strong>
      requiring parallel execution. Goroutines and channels provide a robust yet simple way to manage complex concurrent
      operations.</p>
    <hr>
    <h2 id="3-rust">3. Rust</h2>
    <p>Rust focuses on <strong>safety</strong> and <strong>predictability</strong> in concurrency. It does not have
      built-in concurrency primitives like goroutines, but it provides powerful abstractions for safe concurrency
      through its <strong>ownership model</strong> and libraries such as <strong>Tokio</strong> for async support.</p>
    <h3 id="key-features-2">Key Features</h3>
    <ul>
      <li><strong>Ownership and Borrowing</strong>: Ensures memory safety by enforcing strict rules on data sharing.
      </li>
      <li><strong>async/await</strong>: Rust's async/await syntax, along with <code>futures</code>, provides
        asynchronous functionality.</li>
      <li><strong>tokio</strong>: A library that provides an async runtime for handling asynchronous tasks efficiently.
      </li>
    </ul>
    <h3 id="example-2">Example</h3>
    <pre><code class="language-rust">use tokio::time::{sleep, Duration};

async fn fetch_data() {
    sleep(Duration::from_secs(2)).await;  // Non-blocking wait
    println!(&quot;Data fetched&quot;);
}

#[tokio::main]
async fn main() {
    tokio::spawn(fetch_data());  // Spawn async task
    println!(&quot;Waiting for data...&quot;);
    sleep(Duration::from_secs(3)).await;  // Ensure main doesn&#39;t exit before task completes
}
</code></pre>
    <h3 id="summary-2">Summary</h3>
    <p>Rust's concurrency model is focused on <strong>memory safety</strong> and <strong>performance</strong>. While it
      may be more complex, Rust is highly effective for systems programming where <strong>low-level control</strong> and
      <strong>zero-cost abstractions</strong> are critical.</p>
    <hr>
    <h2 id="comparison-table">Comparison Table</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>JavaScript</th>
          <th>Go</th>
          <th>Rust</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Concurrency Model</strong></td>
          <td>Event Loop, async/await</td>
          <td>Goroutines, Channels</td>
          <td>async/await, Ownership</td>
        </tr>
        <tr>
          <td><strong>Threading</strong></td>
          <td>Single-threaded, non-blocking</td>
          <td>Multithreaded with goroutines</td>
          <td>Multithreaded with async tasks (tokio)</td>
        </tr>
        <tr>
          <td><strong>Use Cases</strong></td>
          <td>I/O-bound</td>
          <td>CPU-bound and I/O-bound</td>
          <td>Systems programming, CPU-intensive</td>
        </tr>
        <tr>
          <td><strong>Data Sharing</strong></td>
          <td>Shared through closures</td>
          <td>Shared via channels</td>
          <td>Managed through ownership/borrowing</td>
        </tr>
        <tr>
          <td><strong>Error Handling</strong></td>
          <td><code>try/catch</code></td>
          <td><code>recover</code> and <code>defer</code></td>
          <td>Result/Option enums</td>
        </tr>
      </tbody>
    </table>

    <footer>
      <p>Each language's approach to concurrency reflects its primary design goals. JavaScript favors simplicity, Go
      emphasizes lightweight concurrency, and Rust prioritizes safety and low-level control. Each of these models has
      strengths suited to particular types of applications, making them powerful tools in the right context. 😼
    </p>
    </footer>
  </article>
</template>
