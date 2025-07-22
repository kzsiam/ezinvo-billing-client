// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import React, { useState } from 'react';



// const Profile = () => {
   


//   const [profileImage, setProfileImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);
//     setPreviewUrl(URL.createObjectURL(file));
//   };
//     return (
//         <div className='mt-40'> 
        
//             <Card className="max-w-4xl mx-auto mt-8 p-6 space-y-6 shadow rounded-xl">
//                 <h1>Edit Profile</h1>
//                 {/* Profile Image Upload */}
//                 <div className="flex items-center gap-4">
//                     <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
//                         {previewUrl ? (
//                             <img src={previewUrl} alt="Profile" className="w-full h-full object-cover" />
//                         ) : (
//                             <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
//                         )}
//                     </div>
//                     <div>
//                         <Input type="file" accept="image/*" onChange={handleImageChange} />
//                     </div>
//                 </div>

//                 {/* Form Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Full Name */}
//                     <div>
//                         <Label>Full Name</Label>
//                         <Input placeholder="Enter your name" defaultValue="KaZi SiAm" />
//                     </div>

//                     {/* Email (readonly) */}
//                     <div>
//                         <Label>Email Address <span className="text-blue-600 cursor-pointer text-sm ml-2">Change</span></Label>
//                         <p className="mt-2 text-gray-600">md*********@gmail.com</p>
//                     </div>

//                     {/* Mobile */}
//                     <div>
//                         <Label>Mobile <span className="text-blue-600 cursor-pointer text-sm ml-2">Add</span></Label>
//                         <p className="mt-2 text-gray-500">Please enter your mobile</p>
//                     </div>

//                     {/* Gender */}
//                     <div>
//                         <Label>Gender</Label>
//                         <Select>
//                             <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
//                             <SelectContent>
//                                 <SelectItem value="male">Male</SelectItem>
//                                 <SelectItem value="female">Female</SelectItem>
//                                 <SelectItem value="other">Other</SelectItem>
//                             </SelectContent>
//                         </Select>
//                     </div>
//                 </div>

//                 {/* Save Button */}
//                 <div className="pt-4">
//                     <Button className="bg-cyan-700 hover:bg-orange-600">SAVE CHANGES</Button>
//                 </div>
//             </Card>
//         </div>
//     );
// };

// export default Profile;