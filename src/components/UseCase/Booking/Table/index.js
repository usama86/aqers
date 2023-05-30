import React, { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import MyModal from "components/Base/Modal";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import StackCompoent from "components/Base/StackCompoent";
import ButtonComponent from "components/Base/ButtonComponent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import styled from "@emotion/styled";

const StyledTimePicker = styled(TimeRangePicker)(({ theme, ...params }) => {
  return {
    "& .react-timerange-picker__wrapper": {
      height: "53px",
    },
  };
});

const EditBtn = (props) => {
  const [openEditModel, setOpenEditModel] = useState(false);
  const [value, onChange] = useState(["10:00", "11:00"]);

  return (
    <>
      <TypographyComponent
        {...props}
        onClick={() => setOpenEditModel(true)}
        variant="TableText"
        component="TableText"
        sx={{
          fontSize: "15px",
          cursor: "pointer",
          "&:hover": {
            color: "#4463ff",
          },
        }}
      >
        Edit
      </TypographyComponent>
      <Model
        {...props}
        openModel={openEditModel}
        setOpenModel={setOpenEditModel}
        heading="Edit Booking"
        ButtonDiscard="Discard"
        ButtonApply="Change"
      >
        <TypographyComponent
          sx={{ textAlign: "center" }}
          variant="BookingModelText"
          component="p"
        >
          You can only change date and time
        </TypographyComponent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TypographyComponent variant="EditBox" component="span">
            Date
          </TypographyComponent>
          <DatePicker />
        </LocalizationProvider>
        <TypographyComponent variant="EditBox" component="span">
          Time
        </TypographyComponent>
        <StyledTimePicker onChange={onChange} value={value} />
      </Model>
    </>
  );
};

const DeleteBtn = (props) => {
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  return (
    <>
      <TypographyComponent
        {...props}
        onClick={() => setOpenDeleteModel(true)}
        variant="TableText"
        component="TableText"
        sx={{
          fontSize: "15px",
          cursor: "pointer",
          "&:hover": {
            color: "#4463ff",
          },
        }}
      >
        Delete
      </TypographyComponent>
      <Model
        {...props}
        openModel={openDeleteModel}
        setOpenModel={setOpenDeleteModel}
        heading="Confirm Delete"
        ButtonDiscard="Cancel"
        ButtonApply="Delete"
      >
        <TypographyComponent
          sx={{ textAlign: "center" }}
          variant="BookingModelText"
          component="p"
        >
          Are you sure you want to delete?
        </TypographyComponent>
      </Model>
    </>
  );
};

const Model = ({
  openModel,
  children,
  setOpenModel,
  heading,
  ButtonDiscard,
  ButtonApply,
  ...props
}) => (
  <MyModal
    open={openModel}
    handleClose={(e) => setOpenModel(false)}
    width={relative_width_size_generator(495)}
    // sx={{ borderColor: "white" }}
  >
    <StackCompoent
      direction="column"
      sx={{
        p: `${relative_width_size_generator(24)}`,
        gap: relative_height_size_generator(26),
      }}
    >
      <TypographyComponent
        sx={{ textAlign: "center" }}
        variant="BookingModelHeading"
        component="h2"
      >
        {heading}
      </TypographyComponent>
      {children}
      <StackCompoent
        sx={{
          "& > *": {
            flexGrow: 1,
          },
          gap: relative_width_size_generator(12),
        }}
      >
        <ButtonComponent
          variant="outlined"
          color="primary"
          sx={{ borderRadius: "8px" }}
        >
          {ButtonDiscard}
        </ButtonComponent>
        <ButtonComponent color="primary" sx={{ borderRadius: "8px" }}>
          {ButtonApply}
        </ButtonComponent>
      </StackCompoent>
    </StackCompoent>
  </MyModal>
);

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
        Cell: ({ renderedCellValue, row }) => (
          <BoxComponent
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <EditBtn />
            <TypographyComponent
              variant="TableText"
              component="TableText"
              sx={{
                fontSize: "15px",
                cursor: "pointer",
                "&:hover": {
                  color: "#4463ff",
                },
              }}
            >
              <DeleteBtn />
            </TypographyComponent>
          </BoxComponent>
        ),
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
    type: "Kentucky",
  },
  {
    title: "Raquel",
    category: "Kohler",
    time: "769 Dominic Grove",
    date: "Columbus",
    type: "Ohio",
  },
  {
    title: "Ervin",
    category: "Reinger",
    time: "566 Brakus Inlet",
    date: "South Linda",
    type: "West Virginia",
  },
  {
    title: "Brittany",
    category: "McCullough",
    time: "722 Emie Stream",
    date: "Lincoln",
    type: "Nebraska",
  },
  {
    title: "Branson",
    category: "Frami",
    time: "32188 Larkin Turnpike",
    date: "Charleston",
    type: "South Carolina",
  },
];
