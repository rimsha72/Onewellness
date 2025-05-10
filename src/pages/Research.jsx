import toast, { Toaster } from "react-hot-toast";
import ResearchCards from "../components/ResearchCards";
export default function Research() {
  return (
    <div>
      <Toaster />
      <div className="max-w-screen-3xl mx-auto font-manrope">
        <div className="lg:mx-4 sm:mx-0 space-y-4">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-2">
            <h1 className="font-bold text-2xl">Research</h1>

          </div>
          <ResearchCards />
          <div className="">
            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-250 rounded-2xl p-4 bg-white">
                <p className="text-sm text-[#171725] font-medium mb-2">What sort of questions they asking from tasha?</p>
                <p className="text-md font-semibold text-[#153C35]">LATE NIGHT THOUGHTS</p>
              </div>

              <div className="border border-gray-250 rounded-2xl p-4 bg-white">
                <p className="text-sm text-[#171725] font-medium mb-2">What percentage of people are using sleeping sounds</p>
                <p className="text-md font-semibold text-[#153C35]">40%</p>
              </div>

              <div className="border border-gray-250 rounded-2xl p-4 bg-white">
                <p className="text-sm text-[#171725] font-medium mb-2">What percentage of people are using journaling</p>
                <p className="text-md font-semibold text-[#153C35]">60%</p>
              </div>

              <div className="border border-gray-250 rounded-2xl p-4 bg-white">
                <p className="text-sm text-[#171725] font-medium mb-2">What symptoms are people entering in pre-screening?</p>
                <p className="text-md font-semibold text-[#153C35]">ANXIETY OR INNER RESTLESSNESS</p>
              </div>
            </div>

            {/* Source Section */}
            <div className="border border-gray-250 rounded-[20px] bg-white p-6">
              <p className="text-sm font-bold text-black-150 mb-1">Where did users hear about the App?</p>
              <p className="text-xs text-gray-400 mb-4">Based on Selections on the Mobile App</p>

              <div className="bg-[#E0EFED] rounded-lg p-4 w-full sm:w-1/6">
                <div className="flex justify-between flex-col">
                  <p className="text-sm font-medium text-black-150">INSTAGRAM</p>
                  <p className="text-sm text-green-150 font-bold mt-2">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}