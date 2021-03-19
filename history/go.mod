module history

go 1.13

replace (
	history/database => ./database
	history/handlers => ./handlers
	history/models => ./models
)

require (
	gitee.com/go-package/carbon v1.3.5
	github.com/gin-gonic/gin v1.6.3
	github.com/go-sql-driver/mysql v1.5.0
	github.com/jinzhu/gorm v1.9.16
	github.com/unknwon/com v1.0.1
)
