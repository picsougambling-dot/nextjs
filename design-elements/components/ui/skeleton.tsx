import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("animate-pulse rounded-md bg-muted relative overflow-hidden", className)} 
      {...props}
    >
      {/* Premium shimmer effect with golden gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shine-sweep"
        style={{ animationDuration: '2s' }}
      />
    </div>
  );
}

export { Skeleton };
