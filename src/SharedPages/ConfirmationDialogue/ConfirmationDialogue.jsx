// // components/ConfirmationDialog.jsx
// import {
//     AlertDialog,
//     AlertDialogTrigger,
//     AlertDialogContent,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogCancel,
//     AlertDialogAction,
// } from "@/components/ui/alert-dialog";

// const ConfirmationDialogue = ({
//     title = "Are you sure?",
//     message = "This action cannot be undone.",
//     trigger,
//     onConfirm
// }) => {
//     return (
//         <AlertDialog>
//             <AlertDialogTrigger asChild>
//                 {trigger}
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//                 <AlertDialogHeader>
//                     <AlertDialogTitle>{title}</AlertDialogTitle>
//                     <AlertDialogDescription>{message}</AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                     <AlertDialogCancel>Cancel</AlertDialogCancel>
//                     <AlertDialogAction className="bg-cyan-700 hover:bg-cyan-600" onClick={onConfirm}>
//                         Continue
//                     </AlertDialogAction>
//                 </AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog>
//     );
// };

// export default ConfirmationDialogue;
