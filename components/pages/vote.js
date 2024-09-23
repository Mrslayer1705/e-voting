import { useState } from 'react';
import Link from 'next/link';

const candidates = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

export default function Vote() {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [submittedVote, setSubmittedVote] = useState(null);

    const handleVote = () => {
        if (selectedCandidate) {
            setSubmittedVote(selectedCandidate);
            // Here you can also save the vote to a backend or local storage
        } else {
            alert('Please select a candidate to vote for.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Vote for Your Candidate</h1>
            <div className="space-y-4">
                {candidates.map(candidate => (
                    <div key={candidate.id}>
                        <input
                            type="radio"
                            name="candidate"
                            value={candidate.id}
                            onChange={() => setSelectedCandidate(candidate.name)}
                        />
                        <label>{candidate.name}</label>
                    </div>
                ))}
                <button onClick={handleVote} className="bg-blue-500 text-white p-2 rounded">Submit Vote</button>
            </div>
            {submittedVote && <p className="mt-4">You voted for: {submittedVote}</p>}
            <Link href="/" className="mt-4 text-blue-500">Back to Home</Link>
        </div>
    );
}
