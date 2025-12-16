export const pythonQuestions = [
    // Easy (1-10) - Basic Python operations
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">5</span><br><span class="variable">y</span> = <span class="number">3</span><br><span class="keyword">print</span>(<span class="variable">x</span> + <span class="variable">y</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 8,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">result</span> = <span class="number">10</span> * <span class="number">2</span><br><span class="keyword">print</span>(<span class="variable">result</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 20,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">a</span> = <span class="number">15</span><br><span class="variable">b</span> = <span class="number">3</span><br><span class="keyword">print</span>(<span class="variable">a</span> // <span class="variable">b</span>)</div><span class="comment"># What is the output? (// is floor division)</span>`,
        answer: 5,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">7</span><br><span class="variable">x</span> += <span class="number">3</span><br><span class="keyword">print</span>(<span class="variable">x</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 10,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">nums</span> = [<span class="number">2</span>, <span class="number">4</span>, <span class="number">6</span>]<br><span class="keyword">print</span>(<span class="function">sum</span>(<span class="variable">nums</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 12,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">20</span><br><span class="variable">y</span> = <span class="number">4</span><br><span class="keyword">print</span>(<span class="variable">x</span> % <span class="variable">y</span>)</div><span class="comment"># What is the output? (% is modulo)</span>`,
        answer: 0,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="keyword">def</span> <span class="function">add</span>(<span class="variable">a</span>, <span class="variable">b</span>):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="variable">a</span> + <span class="variable">b</span><br><br><span class="keyword">print</span>(<span class="function">add</span>(<span class="number">3</span>, <span class="number">7</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 10,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">text</span> = <span class="string">"Python"</span><br><span class="keyword">print</span>(<span class="function">len</span>(<span class="variable">text</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 6,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">3</span><br><span class="variable">y</span> = <span class="number">4</span><br><span class="keyword">print</span>(<span class="variable">x</span> * <span class="variable">y</span> - <span class="number">2</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 10,
        difficulty: 'easy'
    },
    {
        q: `<div class="code-block"><span class="variable">nums</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>]<br><span class="keyword">print</span>(<span class="function">max</span>(<span class="variable">nums</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 4,
        difficulty: 'easy'
    },

    // Medium (11-20) - More complex operations
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">5</span><br><span class="keyword">print</span>(<span class="variable">x</span> ** <span class="number">2</span>)</div><span class="comment"># What is the output? (** is power)</span>`,
        answer: 25,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="variable">a</span> = <span class="number">3</span><br><span class="variable">b</span> = <span class="number">4</span><br><span class="keyword">print</span>(<span class="variable">a</span> ** <span class="number">2</span> + <span class="variable">b</span> ** <span class="number">2</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 25,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="variable">nums</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>]<br><span class="keyword">print</span>(<span class="function">sum</span>(<span class="variable">nums</span>[<span class="number">1</span>:<span class="number">4</span>]))</div><span class="comment"># What is the output?</span>`,
        answer: 9,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="keyword">def</span> <span class="function">multiply</span>(<span class="variable">x</span>):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="variable">x</span> * <span class="number">3</span><br><br><span class="keyword">print</span>(<span class="function">multiply</span>(<span class="number">7</span>) - <span class="number">5</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 16,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">10</span><br><span class="variable">y</span> = <span class="number">3</span><br><span class="keyword">print</span>((<span class="variable">x</span> // <span class="variable">y</span>) * <span class="variable">y</span> + (<span class="variable">x</span> % <span class="variable">y</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 10,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="variable">nums</span> = [<span class="number">2</span>, <span class="number">4</span>, <span class="number">6</span>, <span class="number">8</span>]<br><span class="variable">result</span> = <span class="function">sum</span>([<span class="variable">x</span> ** <span class="number">2</span> <span class="keyword">for</span> <span class="variable">x</span> <span class="keyword">in</span> <span class="variable">nums</span>])<br><span class="keyword">print</span>(<span class="variable">result</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 120,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="keyword">import</span> math<br><span class="variable">x</span> = <span class="number">16</span><br><span class="keyword">print</span>(<span class="function">int</span>(math.sqrt(<span class="variable">x</span>)))</div><span class="comment"># What is the output?</span>`,
        answer: 4,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">2</span><br><span class="variable">y</span> = <span class="number">3</span><br><span class="keyword">print</span>((<span class="variable">x</span> + <span class="variable">y</span>) ** <span class="number">2</span> - <span class="variable">x</span> ** <span class="number">2</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 21,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="variable">nums</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>]<br><span class="keyword">print</span>(<span class="function">sum</span>([<span class="variable">x</span> * <span class="number">2</span> <span class="keyword">for</span> <span class="variable">x</span> <span class="keyword">in</span> <span class="variable">nums</span>]))</div><span class="comment"># What is the output?</span>`,
        answer: 12,
        difficulty: 'medium'
    },
    {
        q: `<div class="code-block"><span class="keyword">def</span> <span class="function">calc</span>(<span class="variable">a</span>, <span class="variable">b</span>):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> (<span class="variable">a</span> ** <span class="number">2</span>) + (<span class="variable">b</span> ** <span class="number">2</span>)<br><br><span class="keyword">print</span>(<span class="function">calc</span>(<span class="number">6</span>, <span class="number">8</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 100,
        difficulty: 'medium'
    },

    // Hard (21-30) - Advanced operations
    {
        q: `<div class="code-block"><span class="variable">x</span> = <span class="number">2</span><br><span class="variable">y</span> = <span class="number">3</span><br><span class="keyword">print</span>((<span class="variable">x</span> ** <span class="variable">y</span>) ** <span class="number">2</span> - <span class="variable">x</span> ** <span class="number">3</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 56,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="variable">nums</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>]<br><span class="keyword">print</span>(<span class="function">sum</span>([<span class="variable">x</span> ** <span class="number">3</span> <span class="keyword">for</span> <span class="variable">x</span> <span class="keyword">in</span> <span class="variable">nums</span> <span class="keyword">if</span> <span class="variable">x</span> % <span class="number">2</span> == <span class="number">0</span>]))</div><span class="comment"># What is the output?</span>`,
        answer: 72,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="keyword">def</span> <span class="function">power_calc</span>(<span class="variable">a</span>, <span class="variable">b</span>, <span class="variable">c</span>):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> (<span class="variable">a</span> ** <span class="variable">b</span>) // <span class="variable">c</span><br><br><span class="keyword">print</span>(<span class="function">power_calc</span>(<span class="number">3</span>, <span class="number">4</span>, <span class="number">9</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 9,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="keyword">import</span> math<br><span class="variable">x</span> = <span class="number">3</span><br><span class="variable">y</span> = <span class="number">4</span><br><span class="keyword">print</span>(<span class="function">int</span>(math.sqrt(<span class="variable">x</span> ** <span class="number">2</span> + <span class="variable">y</span> ** <span class="number">2</span>)))</div><span class="comment"># What is the output?</span>`,
        answer: 5,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="variable">nums</span> = <span class="function">range</span>(<span class="number">1</span>, <span class="number">6</span>)<br><span class="keyword">print</span>(<span class="function">sum</span>([<span class="variable">x</span> ** <span class="number">2</span> <span class="keyword">for</span> <span class="variable">x</span> <span class="keyword">in</span> <span class="variable">nums</span> <span class="keyword">if</span> <span class="variable">x</span> % <span class="number">2</span> != <span class="number">0</span>]))</div><span class="comment"># What is the output?</span>`,
        answer: 35,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="keyword">def</span> <span class="function">recursive_power</span>(<span class="variable">n</span>):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span> <span class="variable">n</span> == <span class="number">1</span>:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="number">2</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="number">2</span> ** <span class="function">recursive_power</span>(<span class="variable">n</span> - <span class="number">1</span>)<br><br><span class="keyword">print</span>(<span class="function">recursive_power</span>(<span class="number">2</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 4,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="variable">matrix</span> = [[<span class="number">1</span>, <span class="number">2</span>], [<span class="number">3</span>, <span class="number">4</span>]]<br><span class="keyword">print</span>(<span class="function">sum</span>([<span class="function">sum</span>(<span class="variable">row</span>) <span class="keyword">for</span> <span class="variable">row</span> <span class="keyword">in</span> <span class="variable">matrix</span>]))</div><span class="comment"># What is the output?</span>`,
        answer: 10,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="variable">x</span> = [<span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>]<br><span class="variable">y</span> = [<span class="variable">a</span> ** <span class="number">2</span> <span class="keyword">for</span> <span class="variable">a</span> <span class="keyword">in</span> <span class="variable">x</span>]<br><span class="keyword">print</span>(<span class="function">sum</span>(<span class="variable">y</span>) // <span class="function">len</span>(<span class="variable">y</span>))</div><span class="comment"># What is the output?</span>`,
        answer: 9,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="keyword">def</span> <span class="function">factorial</span>(<span class="variable">n</span>):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span> <span class="variable">n</span> <= <span class="number">1</span>:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="number">1</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="variable">n</span> * <span class="function">factorial</span>(<span class="variable">n</span> - <span class="number">1</span>)<br><br><span class="keyword">print</span>(<span class="function">factorial</span>(<span class="number">5</span>) // <span class="number">10</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 12,
        difficulty: 'hard'
    },
    {
        q: `<div class="code-block"><span class="variable">data</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>]<br><span class="variable">result</span> = <span class="function">sum</span>([<span class="variable">x</span> ** <span class="number">2</span> <span class="keyword">for</span> <span class="variable">x</span> <span class="keyword">in</span> <span class="variable">data</span>]) // <span class="function">len</span>(<span class="variable">data</span>)<br><span class="keyword">print</span>(<span class="variable">result</span>)</div><span class="comment"># What is the output?</span>`,
        answer: 11,
        difficulty: 'hard'
    }
];
