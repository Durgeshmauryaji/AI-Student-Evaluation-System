import {

FaRobot,

FaChartBar,

FaHistory,

FaCheckCircle,

} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

function Features() {

    return (

        <section className="py-20 bg-white">

            <div className="max-w-6xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center">

                    Features

                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    <FeatureCard

                        icon={<FaRobot className="text-blue-600" />}

                        title="AI Evaluation"

                        description="Evaluate answers instantly using AI."

                    />

                    <FeatureCard

                        icon={<FaChartBar className="text-green-600" />}

                        title="Score"

                        description="Automatic score generation."

                    />

                    <FeatureCard

                        icon={<FaHistory className="text-purple-600" />}

                        title="History"

                        description="View previous evaluations."

                    />

                    <FeatureCard

                        icon={<FaCheckCircle className="text-orange-600" />}

                        title="Feedback"

                        description="Detailed improvement suggestions."

                    />

                </div>

            </div>

        </section>

    )

}

export default Features