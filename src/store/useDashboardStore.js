import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  platforms: [],
  leaderboard: [],
  loading: false,
  error: null,

  fetchDashboardData: async () => {
    set({ loading: true, error: null });

    try {
      // Dummy data for now (replace with API later)
      const platformsData = [
        { 
          title: "LeetCode", 
          content: "Competitive coding and DSA practice.", 
          icon: <i className="fas fa-code"></i>, 
          to: "/leetcode",
          stats: { easy: 120, medium: 80, hard: 30, total: 230 }
        },
        { 
          title: "GitHub", 
          content: "Version control and open-source contributions.", 
          icon: <i className="fab fa-github"></i>, 
          to: "/github",
          stats: { repos: 50, followers: 120, stars: 300 }
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
          stats: { easy: 70, medium: 30, hard: 20, total: 120 }
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
      ];

      const leaderboardData = [
        { name: "Alice", platform: "LeetCode", score: 1200 },
        { name: "Bob", platform: "GitHub", score: 980 },
        { name: "Charlie", platform: "LinkedIn", score: 860 },
        { name: "Dave", platform: "CodeChef", score: 820 },
        { name: "Eve", platform: "CodeForces", score: 750 }
      ];

      set({
        platforms: platformsData,
        leaderboard: leaderboardData,
        loading: false,
      });
    } catch (err) {
      set({ error: "Failed to load data", loading: false });
    }
  },
}));
