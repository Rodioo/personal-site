const ButtonType = {
  Primary: 'PRIMARY',
  Link: 'LINK'
} as const;

type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];

export default ButtonType;
