export const CrossIcon = ({ onClick }: { onClick: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 20}
    height={20}
    viewBox="0 0 24 24"
    fill="none" 
    onClick={onClick}
  >
    <path
      d="M18 6L6 18M18 18L6 6"
      stroke={'#000'}
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
