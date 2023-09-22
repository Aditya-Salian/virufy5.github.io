import React from 'react';
import Button from "~/components/atoms/button/Button"
import Text from "~/components/atoms/Text/Text";

export default function Forms() {

    return (
        <>
            <form 
                action="https://docs.google.com/forms/d/1cSlgCcDSc4EPcF-gYD6PR2dNUbvmLFQNOBh80UHeW0g/formResponse" 
                className="mt-16 px-5 py-8 sm:px-10 max-w-[1200px] lg:items-center m-auto bg-[#EEEEEE] mb-16 border-solid border-2 border-gray-300" 
                target="_blank"
                autoComplete="off"
            >
                <Text
                    Text={"Your email address will not be published. Required fields are marked *"}
                    Style="small"
                    TextClassProps={"w-[97%] lg:mb-7 text-center"}
                />
                <div className="mb-6">
                    <input 
                        name="entry.1149158785" 
                        type="name" 
                        id="name" 
                        className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smlock w-full p-2.5 border-gray-400" 
                        placeholder="Full Name*" 
                        required></input>
                </div>
                <div className="mb-6">
                    <input 
                        name="entry.1955664903"
                        type="email" 
                        id="email" 
                        className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-sm block w-full p-2.5 border-gray-400" 
                        placeholder="Email*" 
                        required></input>
                </div>
                <div className="mb-6">
                    <textarea
                        name="entry.1134294355"
                        id="message" 
                        rows={5} 
                        className="p-2.5 focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smblock w-full border-gray-400" 
                        placeholder="Comment*" 
                        required></textarea>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <Button size="medium" type="primary" path="#" label="SEND" />
                    </div>
                </div>
            </form>
        </>
    )
}
