'use client';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

export default function Loader({ size = 'md', fullScreen = false }: LoaderProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
  };

  const loader = (
    <div 
      className={`animate-spin rounded-full border-t-purple-500 border-r-purple-500 border-b-transparent border-l-transparent ${sizeClasses[size]} ${fullScreen ? '' : 'inline-block'}`}
      style={{ 
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    />
  );

  if (fullScreen) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        {loader}
      </div>
    );
  }

  return loader;
} 