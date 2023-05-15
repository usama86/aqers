import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

export const BookingTable = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "time",
        header: "Time",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
      {
        accessorKey: "type",
        header: "Type",
      },
      {
        accessorKey: "actions",
        header: "Actions",
      },
    ],
    []
    //end
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
    />
  );
};

export default BookingTable;

export const data = [
  {
    title: "Dylan",
    category: "Murray",
    time: "261 Erdman Ford",
    date: "East Daphne",
    Type: "Kentucky",
  },
  {
    title: "Raquel",
    category: "Kohler",
    time: "769 Dominic Grove",
    date: "Columbus",
    Type: "Ohio",
  },
  {
    title: "Ervin",
    category: "Reinger",
    time: "566 Brakus Inlet",
    date: "South Linda",
    Type: "West Virginia",
  },
  {
    title: "Brittany",
    category: "McCullough",
    time: "722 Emie Stream",
    date: "Lincoln",
    Type: "Nebraska",
  },
  {
    title: "Branson",
    category: "Frami",
    time: "32188 Larkin Turnpike",
    date: "Charleston",
    Type: "South Carolina",
  },
];
