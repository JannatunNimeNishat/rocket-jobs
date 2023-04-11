import React from 'react';

const Blog = () => {
    const newLine = '\n';
    return (
        <>
            <div className=' bg-[#D9D9D9] '>
                <h1 className='pt-16 pb-28 text-center text-xl font-bold'>Blog</h1>
            </div>
            <div className='mt-14 my-container'>
                {/* q.1 */}
                <div className='bg-slate-400 p-5 rounded'>
                    <h3 className='text-xl font-semibold'>Q.1 When should you use context API?</h3>
                    <div className='ml-3 mt-3'>
                        <p >Context API is a way of passing props or data to every level of the component tree without doing the props drilling.
                            It reduces the complexity of passing props to every single component until it reaches its destination component. With the help of context API now we can pass data through all the components and the destination component can easily receive this data using a hook called useContext.
                        </p>
                        <h3 className='font-semibold mt-2'>There are 4 steps to using React context API:</h3>
                        <ul className=' list-decimal ml-4'>
                            <li className=''>Create a context using the createContext method.</li>
                            <code className='bg-white px-2 rounded'> export const ContextName = createContext(default value);</code>

                            <li className='mt-3 mb-2'>Take our created context and wrap the context provider around our context tree.</li>
                            <code className='rounded'>
                                <div className='bg-white w-1/4 px-1 rounded'>
                                <div>{`<ContextName.Provider value=” ”>`}</div>
                                <div>{`<Component1 />`}</div>
                                <div>{`<Component2 />`}</div>
                                <div>{`<Component3 />`}</div>
                                <div>{`<ContextName>`}</div>
                                </div>
                            </code>
                            <li className='mt-2'>Create a context using the createContext method.</li>
                            <code className='bg-white px-2 rounded'>{` <ContextName.Provider value=” any valid JS value ”>`}</code>
                            <li className='mt-3'>Create a context using the createContext method.</li>
                            <code className='bg-white px-2 rounded'> export const ContextName = createContext(default value);</code>
                        </ul>
                    </div>
                </div>

                {/* q.2 */}
                <div className='bg-slate-400 p-5 mt-8 rounded'>
                    <h3 className='text-xl font-semibold'>Q.2 What is a custom hook?</h3>
                    <div className='ml-3 mt-3'>
                        <p>Custom hooks are those hooks that are made by use not by React.
                            When we have some common lines of code that need to be used by multiple components, then instead of writing the same code in every component we can extract those codes and make a custom hook. And replace those codes with our custom-made code.</p>

                    </div>
                </div>
                {/* q.3 */}
                <div className='bg-slate-400 p-5 mt-8 rounded'>
                    <h3 className='text-xl font-semibold'>Q.3 What is useRef?</h3>
                    <div className='ml-3 mt-3'>
                        <p>useRef is a React hook that creates a mutable variable which not re-render the component on every change.
                            useRef returns a ref object with a single property initially set to the initial value we provided. On the next renders, useRef will return the same object. If we change a ref it does not trigger a re-render. That’s why it is perfect for storing information that doesn’t affect the visual output of our component.
                        </p>
                        <p className='font-semibold mt-2 mb-2'>Syntax:</p>
                        <code className='bg-white px-2 rounded'> const ref = useRef ( initialValue )</code>
                    </div>
                </div>

                {/* q.4 */}
                <div className='bg-slate-400 p-5 mt-8 rounded'>
                    <h3 className='text-xl font-semibold'>Q.4 What is useMemo?</h3>
                    <div className='ml-3 mt-3'>
                        <p>useMemo is a React hook that memorized the result of a  calculation between re-renders.
                            It is used to increase the performance of a React app. If there is an expensive task on the website this hook will memorize the expensive task and only use that expensive task when needed instead of using it on every re-render. </p>
                        <p className='font-semibold mt-2 mb-2'>Syntax:</p>
                        <code className='bg-white px-2 rounded'> const variableName = useMemo( calculate value that needed to memorized, dependencies )</code>
                    </div>
                </div>



            </div >
        </>
    );
};

export default Blog;