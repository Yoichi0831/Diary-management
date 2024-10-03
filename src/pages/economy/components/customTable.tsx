import React from 'react';
import { Badge } from "./Badge"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "./table"

export const TableExample = () => {
  const data: Array<{
    
    InternationalNews: string
    Date: string
    Status: String
    Location: string
    ImpactOnInflation: string
  }> = [
    {
      InternationalNews: "Global oil prices plummet amid declining demand",
      Date: "Sept 11, 2024",
      Status: "Decrease",
      Location: "Global (China & US)",
      ImpactOnInflation: "Decreasing: Lower oil prices can reduce inflation by lowering transport and production costs.",
    },
    {
      InternationalNews: "Humanitarian crisis in Gaza worsens",
      Date: "Sept 17, 2024",
      Status: "Decrease",
      Location: "Gaza, Palestine",
      ImpactOnInflation: "Neutral/Increasing: Supply chain disruptions could raise prices locally, but global inflation impact is limited.",
    },
    {
      InternationalNews: "Floods in Nigeria displace thousands",
      Date: "Sept 17, 2024",
      Status: "Increase",
      Location: "Nigeria",
      ImpactOnInflation: "Increasing: Severe weather affecting food supply and displacing people could increase local inflation.",
    },
    {
      InternationalNews: "Lebanon faces wave of attacks amid political unrest",
      Date: "Sept 17, 2024",
      Status: "Increase",
      Location: "Lebanon",
      ImpactOnInflation: "Increasing: Political instability can disrupt the economy, leading to price increases for essential goods.",
    },
    {
      InternationalNews: "Venezuela: Rights probe highlights severe repression",
      Date: "Sept 17, 2024",
      Status: "Increase",
      Location: "Venezuela",
      ImpactOnInflation: "Increasing: Political instability and repression can negatively affect economic activity and lead to inflation.",
    },
  ]

  return (
    <>
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>InternationalNews</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Location</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>ImpactOnInflation</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.InternationalNews}>
                <TableCell >{item.InternationalNews}</TableCell>
                <TableCell>{item.Date}</TableCell>
                <TableCell>{item.Location}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.Status === "Increase" ? "error" : "default"}
                  >
                    {item.Status}
                  </Badge>
                </TableCell>
                <TableCell>{item.ImpactOnInflation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </>
  )
}