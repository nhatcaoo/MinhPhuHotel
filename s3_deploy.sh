#!/bin/bash
SITE=$1

if [ -z "$SITE" ]
then
      echo "S3 site name is required"
else
      RM_CMD="aws s3 rm s3://$SITE --recursive"
      CMD="aws s3 cp dist s3://$SITE --recursive"
      eval $RM_CMD
      eval $CMD
fi

