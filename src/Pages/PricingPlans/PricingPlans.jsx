import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useTitle from '@/hooks/useTitle';
import React from 'react';

const plans = [
    {
        title: "Basic",
        price: "$0",
        note: "/month",
        users: "10 members only",
        button: "Free Access",
        features: [
            "40 Daily Requests With Standard Models",
            "Smart Writing Assistant Powered By AI",
            "Public Apps Only",
            "Email-Based Support",
            "Use On Up To 3 Devices",
            "Compatible With Most Browser",
            "Memory Up To 2GB"
        ]
    },
    {
        title: "Teams",
        price: "$35",
        note: "/month",
        users: "per member",
        button: "Get Started",
        highlight: true,
        features: [
            "100 Daily Requests With Medium Models",
            "Smart Writing Assistant Powered Multiple AI",
            "Public & Private Apps",
            "Email-Based Support",
            "Use On Up To 5 Devices",
            "Compatible With Most Browser",
            "Memory Up To 10GB"
        ]
    },
    {
        title: "Enterprise",
        price: "$89",
        note: "/month",
        users: "per member",
        button: "Get Started",
        features: [
            "500 Daily Requests With High Models",
            "Smart Writing Assistant Powered Multiple AI",
            "Public & Private Apps",
            "Email-Based Support",
            "Use On Up To 20 Devices",
            "Compatible With Most Browser",
            "Memory Up To 50GB"
        ]
    }
];


const PricingPlans = () => {
     useTitle('Pricing Plans')


    return (
        <div className='mt-40'>
            <div className="flex flex-col items-center p-6">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Pricing Plans</h2>
                    <p className="text-gray-500">Start free and upgrade anytime as your team and projects grow</p>
                    <div className="text-sm mt-2 text-blue-600 cursor-pointer">Monthly <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded">Annual Save 20% Off</span></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {plans.map((plan, i) => (
                        <Card key={i}
                            className={`flex flex-col justify-between shadow-lg ${plan.highlight ? "border-2 border-blue-500" : ""
                                }`}
                        >
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                                <p className="text-3xl font-bold">{plan.price} <span className="text-base font-normal">{plan.note}</span></p>
                                <p className="text-sm text-gray-500 mb-4">{plan.users}</p>
                                <Button
                                    className={`w-full mb-4 ${plan.highlight ? "bg-blue-600 hover:bg-blue-700 cursor-pointer" : "bg-black hover:bg-gray-900"}`}
                                >
                                    {plan.button}
                                </Button>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-blue-600 mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <p className="text-sm mt-6 text-gray-500">
                    Seeking for custom solutions and personalized support? <span className="text-blue-600 underline cursor-pointer">Contact sales</span>
                </p>
            </div>
        </div>
    );
};

export default PricingPlans;