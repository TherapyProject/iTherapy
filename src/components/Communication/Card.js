import React from "react";

function Card({ title, description, link }) {
    return (
        <div className=" text-center max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <a href={link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>

        </div>
    );
}

export default Card;
