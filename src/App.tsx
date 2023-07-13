import {useState} from "react";

enum Step {
    First,
    Second,
    Third,
}

function App() {
    const [currentStep, setCurrentStep] = useState<Step>(Step.First)
    console.log(currentStep)

    function toggleNextStep() {
        setCurrentStep((prevStep) => prevStep + 1)
    }

    function togglePrevStep() {
        setCurrentStep((prevStep) => prevStep - 1)
    }

    return (
        <>
            <div className={'bg-slate-200 w-2/3 mx-auto mt-20 h-60 px-4'}>
                <div className={'flex justify-around pt-6'}>
                    <div className={`bg-blue-400 rounded-full  w-5 h-5 flex items-center justify-center`}>1</div>
                    <div
                        className={`${currentStep === Step.Second || currentStep === Step.Third ? 'bg-blue-400' : 'bg-slate-400'} rounded-full w-5 h-5 flex items-center justify-center`}>2
                    </div>
                    <div
                        className={`${currentStep === Step.Third ? 'bg-blue-400' : 'bg-slate-400'} rounded-full w-5 h-5 flex items-center justify-center`}>3
                    </div>
                </div>
                <div className={'text-center py-6 text-2xl'}>
                    {currentStep === Step.First && <h1>Learn React</h1>}
                    {currentStep === Step.Second && <h1>Make Portfolio</h1>}
                    {currentStep === Step.Third && <h1>Apply for jobs</h1>}
                </div>
                <div className={'flex justify-center mt-5 gap-6'}>
                    <button className={'bg-red-400 py-2 px-4 rounded-lg disabled:cursor-not-allowed'}
                            onClick={togglePrevStep} disabled={currentStep === Step.First}>Previous
                    </button>
                    <button className={'bg-green-400 py-2 px-4 rounded-lg disabled:cursor-not-allowed'}
                            onClick={toggleNextStep} disabled={currentStep === Step.Third}>Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
