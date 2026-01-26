const BASE_URL = "http://127.0.0.1:8000/api/v1";

/* ---------- RESUME UPLOAD ---------- */
export async function uploadResume(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/resume/analyze`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error("Resume analysis failed");
  }

  const json = await response.json();
  return json.data; // ✅ unwrap backend response
}

/* ---------- READINESS SCORE ---------- */
export async function getReadinessScore(role, skills) {
  const response = await fetch(`${BASE_URL}/readiness-score`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      role,
      skills
    })
  });

  if (!response.ok) {
    throw new Error("Readiness score failed");
  }

  const json = await response.json();
  return json.data; // ✅ unwrap backend response
}

/* ---------- ROADMAP ---------- */
export async function generateRoadmap(payload) {
  const response = await fetch(`${BASE_URL}/generate-roadmap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Roadmap generation failed");
  }

  const json = await response.json();
  return json.data; // ✅ unwrap backend response
}
export async function getAIExplanation(payload) {
  const res = await fetch("http://127.0.0.1:8000/api/v1/ai-explanation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const json = await res.json();
  return json.data;
}

export async function getUserHistory(userId) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/v1/history/${userId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user history");
  }

  const result = await response.json();
  return result.data;
}
