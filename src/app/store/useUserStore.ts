import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      userInfoAgency: [
        {
          id: '1',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
        {
          id: '2',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
        {
          id: '3',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
        {
          id: '4',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
      ],
      userInfoMedia: [
        {
          id: '1',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
        {
          id: '2',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
        {
          id: '3',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
      ],
      userInfoInvestor: [
        {
          id: '1',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
        {
          id: '2',
          compnay: 'TestOperation',
          name: 'Mr.Test testsabud',
          email: 'test.see@test.com',
          text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
          liked: false,
        },
      ],
      addUserAgency: (newUser: any) =>
        set((state) => ({
          userInfoAgency: [...state.userInfoAgency, newUser],
        })),
      removeUserAgency: (id) =>
        set((state) => ({
          userInfoAgency: state.userInfoAgency.filter((user) => user.id !== id),
        })),
      toggleLikeAgency: (id) =>
        set((state) => ({
          userInfoAgency: state.userInfoAgency.map((user) =>
            user.id === id
              ? {
                  ...user,
                  liked: !user.liked,
                  likes: user.liked ? user.likes - 1 : user.likes + 1,
                }
              : user
          ),
        })),
      addUserMedia: (newUser) =>
        set((state) => ({ userInfoMedia: [...state.userInfoMedia, newUser] })),
      removeUserMedia: (id) =>
        set((state) => ({
          userInfoMedia: state.userInfoMedia.filter((user) => user.id !== id),
        })),
      toggleLikeMedia: (id) =>
        set((state) => ({
          userInfoMedia: state.userInfoMedia.map((user) =>
            user.id === id
              ? {
                  ...user,
                  liked: !user.liked,
                  likes: user.liked ? user.likes - 1 : user.likes + 1,
                }
              : user
          ),
        })),
      addUserInvestor: (newUser) =>
        set((state) => ({
          userInfoInvestor: [...state.userInfoInvestor, newUser],
        })),
      removeUserInvestor: (id) =>
        set((state) => ({
          userInfoInvestor: state.userInfoInvestor.filter(
            (user) => user.id !== id
          ),
        })),
      toggleLikeInvestor: (id) =>
        set((state) => ({
          userInfoInvestor: state.userInfoInvestor.map((user) =>
            user.id === id
              ? {
                  ...user,
                  liked: !user.liked,
                  likes: user.liked ? user.likes - 1 : user.likes + 1,
                }
              : user
          ),
        })),
    }),
    {
      name: 'user-storage', // unique name for storage
      getStorage: () => sessionStorage, // specify sessionStorage as the storage
    }
  )
);

export default useStore;
