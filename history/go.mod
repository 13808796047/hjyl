module github.com/13808796047

go 1.13

replace (
	github.com/13808796047/history/database => ./database
	github.com/13808796047/history/handlers => ./handlers
	github.com/13808796047/history/models => ./models
	github.com/13808796047/history/router => ./router
)

require github.com/gin-gonic/gin v1.6.3
