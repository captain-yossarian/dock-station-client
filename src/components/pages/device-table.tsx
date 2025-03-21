import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Device, DeviceStatus } from "../shared-types";
import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";
 
interface DeviceTableProps {
  rows: Device[];
}
export const DeviceTable = ({ rows }: DeviceTableProps) => {
  return (
    <Table>
      <TableCaption>Список підключених дронів</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">IP</TableHead>
          <TableHead>MAC</TableHead>
          <TableHead>Назва</TableHead>
          <TableHead className="text-right">Стасус</TableHead>
          <TableHead className="text-right">Змінити статус</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.ip}>
            <TableCell className="font-medium">{row.ip}</TableCell>
            <TableCell>{row.mac}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Switch
                  id="airplane-mode"
                   onCheckedChange={() => {}}
                />
                <Label htmlFor="airplane-mode">Powered</Label>
             
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
