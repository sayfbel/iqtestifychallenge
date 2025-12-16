const STORAGE_KEY = 'iq_test_results_v3';

const initialData = [];

export const users = initialData;

/**
 * Save a quiz result to local storage.
 * @param {Object} result - The result object.
 */
// Helper to validate level
const isValidLevel = (level) => {
    return level && !isNaN(level) && level > 0;
};

export const saveQuizResult = (result) => {
    try {
        const currentData = getAllResults();
        const level = result.quizLevel || result.levelsCompleted;

        // Validation: If level is missing, 0, or NaN, do not save
        if (!isValidLevel(level)) {
            console.warn("Skipping save: Invalid quiz level", level);
            return;
        }

        // Ensure result matches schema
        const entry = {
            userId: result.userId || result.id || `#${Math.floor(Math.random() * 90000) + 10000} `,
            quizLevel: level,
            estimatedIQ: result.estimatedIQ || 'N/A',
            wrongAttempts: result.wrongAttempts,
            timeTaken: result.timeTaken,
            date: result.date || new Date().toISOString().split('T')[0],
            quizType: result.quizType || 'Math' // Default to Math if missing, but calls should provide it
        };

        const newData = [entry, ...currentData];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        console.log("Quiz Result Saved:", entry);
        return entry;
    } catch (error) {
        console.error("Failed to save quiz result:", error);
    }
};

/**
 * Retrieve all results (initializing if empty).
 */
const getAllResults = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        } else {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
            return initialData;
        }
    } catch (error) {
        return initialData;
    }
};

export const getMathResults = () => {
    return getAllResults().filter(r => r.quizType === 'Math' && isValidLevel(r.quizLevel));
};

export const getPythonResults = () => {
    return getAllResults().filter(r => r.quizType === 'Python' && isValidLevel(r.quizLevel));
};
