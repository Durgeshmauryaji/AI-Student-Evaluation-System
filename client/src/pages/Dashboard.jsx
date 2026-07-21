import { useState } from "react";

import EvaluationForm from "../components/EvaluationForm";
import ResultCard from "../components/ResultCard";
import History from "../components/History";
import DashboardNavbar from "../components/DashboardNavbar";

function Dashboard() {
  // Latest Evaluation Result
  const [result, setResult] = useState(null);

  // Selected History Item
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  // Trigger History Refresh
  const [refreshHistory, setRefreshHistory] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto py-12 px-6">

        <DashboardNavbar />

        {/* Evaluation Form + Result */}
        <div className="grid lg:grid-cols-2 gap-8">

          <EvaluationForm
            setResult={(data) => {
              setResult(data);
              setSelectedEvaluation(null); // Latest evaluation show
            }}
            setRefreshHistory={setRefreshHistory}
          />

          <ResultCard
            result={selectedEvaluation || result}
          />

        </div>

        {/* History */}
        <History
          refreshHistory={refreshHistory}
          setSelectedEvaluation={setSelectedEvaluation}
        />

      </div>
    </div>
  );
}

export default Dashboard;