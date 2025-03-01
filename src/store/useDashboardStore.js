import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  platforms: [],
  leaderboard: [],
  problemCount: null,
  githubData: null,
  codechefData: null,
  loading: false,
  error: null,

  // Fetch LeetCode Problem Count
  fetchProblemCount: async (username) => {
    set({ loading: true, error: null });

    // Check if LeetCode data already exists, if so skip the fetch
    if (useDashboardStore.getState().problemCount) {
      set({ loading: false });
      return; // Skip the fetch if the data is already present
    }
    try {
      const response = await fetch(`http://localhost:8000/get_problem_count/premkumar9030`);
      if (!response.ok) throw new Error("LeetCode API error");

      const data = await response.json();
      set((state) => ({
        problemCount: data,
        platforms: state.platforms.map((platform) =>
          platform.title === "LeetCode"
            ? { 
                ...platform, 
                stats: { 
                  easy: data.easy, 
                  medium: data.medium, 
                  hard: data.hard, 
                  total: data.easy + data.medium + data.hard 
                }
              }
            : platform
        ),
      }));
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // Fetch GitHub Profile Stats
  fetchGitHubStats: async (username) => {
    set({ loading: true, error: null });

    // Check if GitHub data already exists, if so skip the fetch
    if (useDashboardStore.getState().githubData) {
      set({ loading: false });
      return; // Skip the fetch if the data is already present
    }

    try {
      const response = await fetch(`http://localhost:8000/github/repositories/CherupallyPremkumar`);
      if (!response.ok) throw new Error("GitHub API error");

      const data = await response.json();
      set((state) => ({
        githubData: data,
        platforms: state.platforms.map((platform) =>
          platform.title === "GitHub"
            ? { 
                ...platform, 
                stats: { 
                  repos: data.public_repos, 
                  followers: data.followers, 
                  stars: 0 
                } 
              }
            : platform
        ),
      }));
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // Fetch CodeChef Profile Stats
  fetchCodeChefStats: async (username) => {
    set({ loading: true, error: null });

    // Check if CodeChef data already exists, if so skip the fetch
    if (useDashboardStore.getState().codechefData) {
      set({ loading: false });
      return; // Skip the fetch if the data is already present
    }

    try {
      const response = await fetch(`http://localhost:8000/codechef/potato167`);
      if (!response.ok) throw new Error("CodeChef API error");

      const data = await response.json();
      set((state) => ({
        codechefData: data,
        platforms: state.platforms.map((platform) =>
          platform.title === "CodeChef"
            ? { 
                ...platform, 
                stats: { 
                  rating: data.current_rating 
                } 
              }
            : platform
        ),
      }));
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // Fetch Dashboard Data (Combining All Fetches)
  fetchDashboardData: async (leetcodeUsername, githubUsername, codechefUsername) => {
    set({ loading: true, error: null });

    try {
      // Fetching real data for all platforms
      await Promise.all([
        useDashboardStore.getState().fetchProblemCount(leetcodeUsername),
        useDashboardStore.getState().fetchGitHubStats(githubUsername),
        useDashboardStore.getState().fetchCodeChefStats(codechefUsername),
      ]);

      set({
        platforms: [
          { 
            title: "LeetCode", 
            content: "Competitive coding and DSA practice.", 
            icon: <i className="fas fa-code"></i>, 
            to: "/leetcode",
            stats: { easy: 0, medium: 0, hard: 0, total: 0 } // This will be updated with real data
          },
          { 
            title: "GitHub", 
            content: "Version control and open-source contributions.", 
            icon: <i className="fab fa-github"></i>, 
            to: "/github",
            stats: { repos: 0, followers: 0, stars: 0 } // This will be updated with real data
          },
          { 
            title: "CodeChef", 
            content: "Competitive programming contests.", 
            icon: <i className="fas fa-utensils"></i>, 
            to: "/codechef",
            stats: { rating: 0 } // This will be updated with real data
          }
        ],
        leaderboard: [
          { name: "Alice", platform: "LeetCode", score: 1200 },
          { name: "Bob", platform: "GitHub", score: 980 },
          { name: "Charlie", platform: "LinkedIn", score: 860 },
          { name: "Dave", platform: "CodeChef", score: 820 }
        ]
      });

      set({ loading: false });
    } catch (err) {
      set({ error: "Failed to load data", loading: false });
    }
  },
}));