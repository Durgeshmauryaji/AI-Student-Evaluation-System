function FeatureCard({

    icon,

    title,

    description,

}) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

            <div className="text-5xl">

                {icon}

            </div>

            <h2 className="text-2xl font-bold mt-4">

                {title}

            </h2>

            <p className="mt-3 text-gray-600">

                {description}

            </p>

        </div>

    )

}

export default FeatureCard