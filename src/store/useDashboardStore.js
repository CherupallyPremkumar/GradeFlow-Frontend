import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  platforms: [],
  leaderboard: [],
  problemCount: null,
  githubData: null,
  loading: false,
  error: null,

  // Initialize Dashboard with Static Data
  initializeDashboard: () => {
    set({
      platforms: [
        { 
          title: "LeetCode", 
          content: "Competitive coding and DSA practice.", 
          icon: <i className="fas fa-code"></i>, 
          to: "/leetcode",
          stats: { easy: 0, medium: 0, hard: 0, total: 0 } // Will be updated dynamically
        },
        { 
          title: "GitHub", 
          content: "Version control and open-source contributions.", 
          icon: <i className="fab fa-github"></i>, 
          to: "/github",
          stats: { repos: 0, followers: 0, stars: 0 } // Will be updated dynamically
        },
        { 
          title: "LinkedIn", 
          content: "Professional networking and job opportunities.", 
          icon: <i className="fab fa-linkedin"></i>, 
          to: "/linkedin",
          stats: { connections: 500, endorsements: 20 }
        },
        { 
          title: "HackerRank", 
          content: "Coding challenges and skill assessments.", 
          icon: <i className="fas fa-laptop-code"></i>, 
          to: "/hackerrank",
          stats: { easy: 40, medium: 25, hard: 10, total: 75 }
        },
        { 
          title: "CodeChef", 
          content: "Competitive programming contests.", 
          icon: <i className="fas fa-utensils"></i>, 
          to: "/codechef",
          stats: { rating:0 }
        },
        { 
          title: "CodeForces", 
          content: "Algorithmic contests and problem-solving.", 
          icon: <i className="fas fa-bolt"></i>, 
          to: "/codeforces",
          stats: { easy: 60, medium: 40, hard: 15, total: 115 }
        },
        { 
          title: "GFG", 
          content: "DSA tutorials and coding problems.", 
          icon: <i className="fas fa-book"></i>, 
          to: "/gfg",
          stats: { easy: 100, medium: 50, hard: 10, total: 160 }
        },
        { 
          title: "TUF+", 
          content: "DSA tutorials and coding problems.", 
          icon: <i className="fas fa-terminal"></i>, 
          to: "/tuf",
          stats: { easy: 90, medium: 60, hard: 25, total: 175 }
        },
      ],
      leaderboard: [
        { name: "Alice", platform: "LeetCode", score: 1200 },
        { name: "Bob", platform: "GitHub", score: 980 },
        { name: "Charlie", platform: "LinkedIn", score: 860 },
        { name: "Dave", platform: "CodeChef", score: 820 },
        { name: "Eve", platform: "CodeForces", score: 750 }
      ],
    });
  },

  // Fetch LeetCode Problem Count
  fetchProblemCount: async (username) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(`http://localhost:8000/get_problem_count/premkumar9030`);
      if (!response.ok) throw new Error("LeetCode API error");

      const data = await response.json();
      console.log(data);

      set((state) => ({
        problemCount: data,
        platforms: state.platforms.map((platform) =>
          platform.title === "LeetCode"
            ? { ...platform, stats: { easy: data.easy, medium: data.medium, hard: data.hard, total: data.easy + data.medium + data.hard } }
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

    try {
      const response = await fetch(`http://localhost:8000/github/repositories/arpitbbhayani`);
      if (!response.ok) throw new Error("GitHub API error");

      const data = await response.json();

      set((state) => ({
        githubData: data,
        platforms: state.platforms.map((platform) =>
          platform.title === "GitHub"
            ? { ...platform, stats: { repos: data.public_repos, followers: data.followers, stars: 0 } } // Update stars separately if needed
            : platform
        ),
      }));
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchCodeChefStats: async (username) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(`http://localhost:8000/codechef/potato167`);
      if (!response.ok) throw new Error("CodeChef API error");

      const data = await response.json();
      console.log(data);

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
  fetchDashboardData: async (leetcodeUsername, githubUsername) => {
    set({ loading: true, error: null });

    try {
      useDashboardStore.getState().initializeDashboard(); // Load static data first

      await Promise.all([
        useDashboardStore.getState().fetchProblemCount(leetcodeUsername),
        useDashboardStore.getState().fetchGitHubStats(githubUsername),
        useDashboardStore.getState().fetchCodeChefStats(githubUsername),
      ]);

      set({ loading: false });
    } catch (err) {
      set({ error: "Failed to load data", loading: false });
    }
  },
}));