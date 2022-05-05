import {Route, Routes, Navigate} from 'react-router-dom'
import MainLayout from "./layouts/MainLayout/MainLayout";


import {HomePage, AboutPage, PostsPage, UsersPage} from "./pages"
import NotFoundPage from "./pages/NotfoundPage/NotfoundPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";


function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'posts'} element={<PostsPage/>}>
                  <Route path={':id'} element={<SinglePostPage/>}/>
              </Route>
              <Route path={'about'} element={<AboutPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
      </Routes>
  );
}

export default App;
