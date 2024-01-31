const PlatformCategory = {
  Web: 'Web',
  Mobile: 'Mobile',
  Other: 'Other',
} as const;

type PlatformCategory = (typeof PlatformCategory)[keyof typeof PlatformCategory];

export default PlatformCategory;