// "use client"

// import { useEffect, useState } from 'react';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   avatar?: string;
// };

// const useUser = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//         try {
//           const userData = localStorage.getItem('user');
//           if (userData) {
//             const data: User = JSON.parse(userData) as User;
//             setUser(data);
//           } else {
//             setUser(null);
//           }
//         } catch (error) {
//           console.error('Failed to fetch user from localStorage:', error);
//           setUser(null);
//         } finally {
//           setLoading(false);
//         }
//       };

//     void fetchUser();
//   }, []);

//   return { user, loading };
// };

// export default useUser;
