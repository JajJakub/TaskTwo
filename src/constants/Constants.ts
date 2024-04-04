export const Category = {
  All: "all",
  Business: "business",
  Entertainment: "entertainment",
  General: "general",
  Health: "health",
  Science: "science",
  Sports: "sports",
  Technology: "technology",
} as const;

export const CategoryLabels = {
  [Category.All]: "All",
  [Category.Business]: "Business",
  [Category.Entertainment]: "Entertainment",
  [Category.General]: "General",
  [Category.Health]: "Health",
  [Category.Science]: "Science",
  [Category.Sports]: "Sports",
  [Category.Technology]: "Technology",
} as const;
