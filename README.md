# Git Clone and Run

- Download or clone the repo
- Go into the directory
- You should already have Node.js installed
- Install the code dependencies with npm install command
- node app.js (to run)

## Node.js handle child threads?

- https://nodejs.org/api/worker_threads.html

  Javascript is a single-threaded application, so there are no child threads in JS. When Asynchronous code is processed, that function is passed to the browser (or operating system in node) and then data is sent back to JS when the event is ready to be processed further.
  You can employ worker threads, which basically fork a process and do the computing in a separate JS environment. Unlike literally forking a process, these worker threads share memory with with the main environment which make them much more efficient.
  node.js, in its essence, is a single thread process. It does not expose child threads and thread management methods to the developer. … js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.

- https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf

## Comments for below code snippet

```
console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");
```

- https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf

Even if the time is set to 0, js will place it at the end of the stack, so every other code will be executed and 1ms later the timeout func. So the result would be first, third, second
