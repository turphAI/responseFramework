import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import FaUtterance from "@/components/FaUtterance";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DonutChartComponent from "@/components/DonutChartComponent";
import StockSummary from "@/components/StockSummary";
import StockNews from "@/components/StockNews";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Home() {
  // Helper function to format ID to Label
  const formatIdToLabel = (id: string) => {
    if (!id) return '';
    const parts = id.split('-');
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + ' section';
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Response Framework</h1>
      
      <TooltipProvider delayDuration={200}>
        <Card className="w-[450px] mx-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <div id="utterance-wrapper" className="px-4 pt-4 pb-2 flex justify-end hover:bg-hover-green transition-colors duration-200 ease-in-out rounded-t-lg">
                <FaUtterance utteranceText="This is a sample user utterance that might be quite long and wrap to multiple lines." />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{formatIdToLabel("utterance-wrapper")}</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <div id="preamble-wrapper" className="px-4 pb-2 pt-2 hover:bg-hover-green transition-colors duration-200 ease-in-out">
                <p className="text-sm">This is the preamble section where introductory or context-setting text might go before the main response.</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{formatIdToLabel("preamble-wrapper")}</p>
            </TooltipContent>
          </Tooltip>
          <div id="answers-wrapper" className="p-4">
            <Tabs defaultValue="typo" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="typo">Typographical</TabsTrigger>
                <TabsTrigger value="table">Tabular data</TabsTrigger>
                <TabsTrigger value="graph">Graphical data</TabsTrigger>
                <TabsTrigger value="combo">Combo</TabsTrigger>
              </TabsList>
              
              <TabsContent value="typo">
                <Card className="mt-2">
                  <CardHeader>
                    <CardTitle>Typographical Answer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">Quicken® recognizes cash transactions in a Fidelity account, as it would in a checking account, when you follow these steps:</p>
                    <ol className="list-decimal list-inside space-y-1 pl-4 text-sm">
                      <li>After a successful download of your History data into Quicken, choose Tools, then Accounts List from the Main Menu.</li>
                      <li>Select the investment account to which you&apos;d like to add a linked checking account, then choose the Edit button. On the General Information tab on the Account Details window, choose Yes to &quot;Show cash in a checking account.&quot; Quicken will prompt you to back up your data file.</li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="table">
                <Card className="mt-2">
                  <CardHeader>
                    <CardTitle>Recent Account Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Table>
                      <TableCaption>A list of your recent transactions.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Apr 20</TableCell>
                          <TableCell>Online Purchase - StoreName</TableCell>
                          <TableCell className="text-right">-$42.17</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Apr 19</TableCell>
                          <TableCell>Direct Deposit - Payroll</TableCell>
                          <TableCell className="text-right">+$2,150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Apr 18</TableCell>
                          <TableCell>Restaurant - Cafe Delight</TableCell>
                          <TableCell className="text-right">-$18.50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Apr 17</TableCell>
                          <TableCell>ATM Withdrawal</TableCell>
                          <TableCell className="text-right">-$60.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Apr 16</TableCell>
                          <TableCell>Utility Bill - Power Co.</TableCell>
                          <TableCell className="text-right">-$112.80</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="graph">
                <Card className="mt-2">
                  <CardHeader>
                    <CardTitle>Data Visualization</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <DonutChartComponent />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="combo">
                <Card className="mt-2">
                  <CardHeader>
                    <CardTitle>Combination Answer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <StockSummary ticker="ORI" />
                    <StockNews ticker="ORI" />
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <div id="postable-wrapper" className="px-4 pb-2 pt-2 hover:bg-hover-green transition-colors duration-200 ease-in-out">
                <p className="text-sm text-muted-foreground">Postable content will go here...</p> 
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{formatIdToLabel("postable-wrapper")}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div id="actions-wrapper" className="px-4 pb-4 pt-2 hover:bg-hover-green transition-colors duration-200 ease-in-out rounded-b-lg">
                <p className="text-sm text-muted-foreground">Actions will go here...</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{formatIdToLabel("actions-wrapper")}</p>
            </TooltipContent>
          </Tooltip>

        </Card>
      </TooltipProvider>
    </main>
  );
} 