resource "aws_lambda_function" "main_lambda" {
    function_name       = "products_watcher${var.environment != "prod" ? "_${var.environment}" : ""}"
    role                = "${aws_iam_role.IAM_ROLE_PRODUCTS_WATCHER_LAMBDA.arn}"
    handler             = "index.handler"
    filename            = "./code.zip"
    source_code_hash    = "${filesha256("./code.zip")}"
    runtime             = "nodejs12.x"
    memory_size         = 512
    timeout             = 600
}