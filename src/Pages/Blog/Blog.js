import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mr-20 lg:ml-20 md:mr-20 md:ml-20 sm:mr-5 mr-5 sm:ml-5 ml-5 mt-20'>
            <div className='border rounded-xl p-4 shadow-lg'>
                <h2 className='text-3xl font-bold'>#What is cors?</h2>
                <p className='font-2xl font-semibold'>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.
                    It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks,
                    if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as
                    cross-site request forgery (CSRF).Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate
                    any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            </div>
            <div className='border rounded-xl p-4 mt-6 shadow-lg'>
                <h2 className='text-3xl font-bold'>#Why are you using Firebase? What other options do you have to implement authentication?</h2>
                <p className='font-2xl font-semibold'>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.Google Firebase
                    offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces
                    development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                    Other options to implement authentication are Auth0, MongoDB, Okta, Amazon Cognito etc.</p>
            </div>
            <div className='border rounded-xl p-4 mt-6 shadow-lg'>
                <h2 className='text-3xl font-bold'>#How does the private route work?</h2>
                <p className='font-2xl font-semibold'>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route.
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the
                    /login page with the return url passed in the location state property.
                </p>
            </div>
            <div className='border rounded-xl p-4 mt-6 shadow-lg'>
                <h2 className='text-3xl font-bold'>#What is Node? How does Node work?</h2>
                <p className='font-2xl font-semibold'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.
                    In other words, Node. js wastes no time or resources on waiting for I/O requests to return.Node.js accepts the request from the clients and sends 
                    the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept
                     of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    Node.js basically works on two concept: Asynchronous and Non-blocking I/O
                </p>
            </div>
        </div>
    );
};

export default Blog;