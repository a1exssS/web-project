import { Button } from "shared/ui/Button/Button"
import styles from './ErrorPage.module.scss'
import { useNavigate } from "react-router-dom"

export const ErrorPage = () => {

   const navigate = useNavigate()
   const onGoBack = () => navigate(-1)
   const refreshPage = () => window.location.reload();

   return (
      <div className={styles.ErrorPage}>
         <span>
            Упс что то пошло не так D:
         </span>
         <div className={styles.ErrorControlls}>
            <Button onClick={onGoBack}>Вернуться назад</Button>
            <Button onClick={refreshPage}>Обновить страницу</Button>
         </div>
      </div>
   )
}
