import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
                <h1 className="text-6xl font-bold text-cyan-700 dark:text-cyan-400 mb-4">
                    404
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Button asChild className="px-6 py-2 text-lg">
                    <Link to="/">Go Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default PageNotFound;