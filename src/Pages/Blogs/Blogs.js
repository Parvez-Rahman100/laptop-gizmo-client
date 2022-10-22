import React from 'react';

const Blogs = () => {
    return (
        <div className='px-14 my-10 container mx-auto'>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> How will you improve the performance of a React Application?</h2>
                <p className='text-xl font-bold mt-1'>Answer: <small> A second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.<br />
                    1. Keeping component state local where necessary.<br />
                    2. Memoizing React components to prevent unnecessary re-renders.<br />
                    3. Code-splitting in React using dynamic import<br />
                    4. Windowing or list virtualization in React<br />
                    5. Lazy loading images in React</small>
                </p>
            </div>

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> What are the different ways to manage a state in a React application?</h2>
                <p className='text-xl font-bold mt-1'>Answer:
                    <small>In react app developer can manage state in his/her React application.<br />
                        1. Local state.<br />
                        2. Global state.<br />
                        3. Server state.<br />
                        4. URL state.
                    </small></p>
            </div>

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> How does prototypical inheritance work?</h2>
                <p className='text-xl font-bold mt-1'>Answer: <small>. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using _proto_.</small></p>
            </div>

            {/* <div className='mb-5'>
            <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p className='text-xl font-bold mt-1'>Answer: <small></small></p>
        </div> */}

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> What is a unit test? Why should write unit tests?</h2>
                <p className='text-xl font-bold mt-1'>Answer: <small>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</small></p>
            </div>

        </div>
    );
};

export default Blogs;