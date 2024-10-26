
interface LoadingProps {
  message?:string

}

export default function LoadingComp({ message }: LoadingProps) {

 

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-4 bg-background border border-border p-4 w-96 h-48 rounded-lg shadow-md">
        
        <div className="w-12 h-12 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path
              d="M20,20 L35,80 L50,40 L65,80 L80,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round">
              <animate
                attributeName="stroke-dasharray"
                from="0 400"
                to="400 400"
                dur="4s"
                repeatCount="indefinite" />
              <animate
                attributeName="stroke-dashoffset"
                from="400"
                to="0"
                dur="4s"
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        <p className="text-lg font-medium text-foreground">{message ?? 'Processing Request'}</p>
        <div className="text-lg text-foreground flex items-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`animate-bounce ${i > 0 ? `delay-${i * 150}` : ''}`}
            >
              .
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

