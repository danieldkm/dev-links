type AvatarContainerProps = {
  children: React.ReactNode;
};

export const AvatarContainer = ({ children }: AvatarContainerProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
    </div>
  )
};
