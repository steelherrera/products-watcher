provider "aws" {
    profile = "default"
    region  = "${var.region}"
}

resource "aws_iam_policy" "iam_for_lambda" {
    name        = "products_watcher_policy"
    description = "policy to execute products watcher lambda function"
    policy      = "${file("./iam/lambda-policy.json")}"
}

resource "aws_iam_role" "IAM_ROLE_PRODUCTS_WATCHER_LAMBDA" {
    name = "products_watcher_lambda_basic_execution"
    assume_role_policy = "${file("./iam/lambda-assume-policy.json")}"
}

resource "aws_iam_policy_attachment" "attachPermissions" {
    name       = "policy_attachment_products_watcher_lambda"
    roles      = ["${aws_iam_role.IAM_ROLE_IAM_ROLE_PRODUCTS_WATCHER_LAMBDARETRY_ACTIVATOR_LAMBDA.name}"]
    policy_arn = "${aws_iam_policy.iam_for_lambda.arn}"
}