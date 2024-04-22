import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import AlertLayout from "../common/AlertLayout";
import { FormUpdateNews } from "./FormUpdateNews";
import { IoMenu } from "react-icons/io5";
import { useMutationPatchArchive } from "@/api/hooks/user/queries";
import { AlertDeleteNews } from "./AlertDeleteNews";

interface MenuPopoverEditNewsProps {
	id: string;
}

export function MenuPopoverEditNews({ id }: MenuPopoverEditNewsProps) {
	

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="bdlight"><IoMenu size={15}/></Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Menu News</h4>
						<p className="text-sm text-muted-foreground">
							Delete or update your news through this menu
						</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							<AlertDeleteNews id={id} />
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<FormUpdateNews id={id} />
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}