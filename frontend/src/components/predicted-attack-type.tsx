import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AttackDataType } from "@/lib/validation";
import { cn } from "@/lib/utils";

export function PredictedAttackType({
  isOpen,
  setIsOpen,
  attackData,
  attackType,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  attackData: AttackDataType;
  attackType: string | null;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn(
          "sm:min-w-[640px] rounded-xl md:min-w-[768px]",
          !isOpen && "hidden"
        )}
      >
        <DialogHeader className="pt-6">
          <DialogTitle>
            <div className="flex flex-col items-center justify-center space-y-4">
              <span className="text-xs text-muted-foreground font-semibold">
                Result:
              </span>
              <div className="w-[180px] text-sm py-3 rounded-sm text-center font-bold bg-[#3A4489] shadow-xl text-white">
                Attack Type {attackType}
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="grid grid-cols-3 px-10 py-10 text-xs gap-y-10 text-black font-medium">
            <div className="space-y-5">
              <h1>Message ID</h1>
              <p>{attackData.messageID}</p>
            </div>
            <div className="space-y-5">
              <h1>Sender</h1>
              <p>{attackData.sender_1}</p>
            </div>
            <div className="space-y-5">
              <h1>Sendtime 1</h1>
              <p>{attackData.sendtime_1}</p>
            </div>
            <div className="space-y-5">
              <h1>Position-X (First Timestamp)</h1>
              <p>{attackData.pos_x1}</p>
            </div>
            <div className="space-y-5">
              <h1>Position-Y (First Timestamp)</h1>
              <p>{attackData.pos_y1}</p>
            </div>
            <div className="space-y-5">
              <h1>Position-Z (First Timestamp)</h1>
              <p>{attackData.pos_z1}</p>
            </div>
            <div className="space-y-5">
              <h1>Speed-X (First Timestamp)</h1>
              <p>{attackData.spd_x1}</p>
            </div>
            <div className="space-y-5">
              <h1>Speed-Y (First Timestamp)</h1>
              <p>{attackData.spd_y1}</p>
            </div>
            <div className="space-y-5">
              <h1>Speed-Z (First Timestamp)</h1>
              <p>{attackData.spd_z1}</p>
            </div>
            <div className="space-y-5">
              <h1>Sender 2</h1>
              <p>{attackData.sender_2}</p>
            </div>
            <div className="space-y-5">
              <h1>Sendtime (Message 2)</h1>
              <p>{attackData.sendtime_2}</p>
            </div>
            <div className="space-y-5">
              <h1>Position-X (Second Timestamp)</h1>
              <p>{attackData.pos_x2}</p>
            </div>
            <div className="space-y-5">
              <h1>Position-Y (Second Timestamp)</h1>
              <p>{attackData.pos_y2}</p>
            </div>
            <div className="space-y-5">
              <h1>Position-Z (Second Timestamp)</h1>
              <p>{attackData.pos_z2}</p>
            </div>
            <div className="space-y-5">
              <h1>Speed-X (Second Timestamp)</h1>
              <p>{attackData.spd_x2}</p>
            </div>
            <div className="space-y-5">
              <h1>Speed-Y (Second Timestamp)</h1>
              <p>{attackData.spd_y2}</p>
            </div>
            <div className="space-y-5">
              <h1>Speed-Z (Second Timestamp)</h1>
              <p>{attackData.spd_z2}</p>
            </div>
          </DialogDescription>
        </DialogHeader>{" "}
      </DialogContent>
    </Dialog>
  );
}
