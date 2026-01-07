/**
 * Assignment 3
 * Part 3: Node Internals (3 Grades)
 */

/**
 * 1. What is the Node.js Event Loop?
 *
 * The Event Loop is the core mechanism in Node.js that handles asynchronous operations.
 * It allows Node.js to execute non-blocking code by processing callbacks once
 * asynchronous tasks are completed.
 */

/**
 * 2. What is Libuv and What Role Does It Play in Node.js?
 *
 * Libuv is a C library used internally by Node.js.
 * It manages the Event Loop, handles file system operations,
 * networking, and executes heavy tasks using a thread pool.
 */

/**
 * 3. How Does Node.js Handle Asynchronous Operations Under the Hood?
 *
 * 1. Node.js sends heavy or async tasks to Libuv.
 * 2. Libuv executes them using the OS or thread pool.
 * 3. When tasks are completed, callbacks are placed in the Event Queue.
 * 4. The Event Loop moves them to the Call Stack for execution.
 */

/**
 * 4. Difference Between Call Stack, Event Queue, and Event Loop
 *
 * Call Stack:
 * - Executes synchronous JavaScript code.
 *
 * Event Queue:
 * - Stores callbacks from completed asynchronous operations.
 *
 * Event Loop:
 * - Monitors the Call Stack and moves tasks from the Event Queue
 *   when the stack is empty.
 */

/**
 * 5. What is the Node.js Thread Pool and How to Set Its Size?
 *
 * The Thread Pool is used for heavy operations such as:
 * - File system tasks
 * - Crypto operations
 * - DNS lookups
 *
 * Default size is 4 threads.
 *
 * You can change it using:
 * process.env.UV_THREADPOOL_SIZE = 8;
 */

/**
 * 6. How Does Node.js Handle Blocking and Non-Blocking Code Execution?
 *
 * Blocking Code:
 * - Stops program execution until the task is finished.
 *
 * Non-Blocking Code:
 * - Executes tasks in the background without stopping the program.
 *
 * Node.js is designed to use non-blocking code for better performance.
 */
