declare const _default: {
    "kind": string;
    "etag": string;
    "discoveryVersion": string;
    "id": string;
    "name": string;
    "canonicalName": string;
    "version": string;
    "revision": string;
    "title": string;
    "description": string;
    "ownerDomain": string;
    "ownerName": string;
    "icons": {
        "x16": string;
        "x32": string;
    };
    "documentationLink": string;
    "protocol": string;
    "baseUrl": string;
    "basePath": string;
    "rootUrl": string;
    "servicePath": string;
    "batchPath": string;
    "parameters": {
        "alt": {
            "type": string;
            "description": string;
            "default": string;
            "enum": string[];
            "enumDescriptions": string[];
            "location": string;
        };
        "fields": {
            "type": string;
            "description": string;
            "location": string;
        };
        "key": {
            "type": string;
            "description": string;
            "location": string;
        };
        "oauth_token": {
            "type": string;
            "description": string;
            "location": string;
        };
        "prettyPrint": {
            "type": string;
            "description": string;
            "default": string;
            "location": string;
        };
        "quotaUser": {
            "type": string;
            "description": string;
            "location": string;
        };
        "userIp": {
            "type": string;
            "description": string;
            "location": string;
        };
    };
    "auth": {
        "oauth2": {
            "scopes": {
                "https://www.googleapis.com/auth/content": {
                    "description": string;
                };
            };
        };
    };
    "schemas": {
        "Amount": {
            "id": string;
            "type": string;
            "properties": {
                "pretax": {
                    "$ref": string;
                    "description": string;
                };
                "tax": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "Error": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "domain": {
                    "type": string;
                    "description": string;
                };
                "message": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Errors": {
            "id": string;
            "type": string;
            "description": string;
            "properties": {
                "code": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "message": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "InvoiceSummary": {
            "id": string;
            "type": string;
            "properties": {
                "additionalChargeSummaries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "customerBalance": {
                    "$ref": string;
                    "description": string;
                };
                "googleBalance": {
                    "$ref": string;
                    "description": string;
                };
                "merchantBalance": {
                    "$ref": string;
                    "description": string;
                };
                "productTotal": {
                    "$ref": string;
                    "description": string;
                };
                "promotionSummaries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "InvoiceSummaryAdditionalChargeSummary": {
            "id": string;
            "type": string;
            "properties": {
                "totalAmount": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Order": {
            "id": string;
            "type": string;
            "properties": {
                "acknowledged": {
                    "type": string;
                    "description": string;
                };
                "channelType": {
                    "type": string;
                    "description": string;
                };
                "customer": {
                    "$ref": string;
                    "description": string;
                };
                "deliveryDetails": {
                    "$ref": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "merchantId": {
                    "type": string;
                    "format": string;
                };
                "merchantOrderId": {
                    "type": string;
                    "description": string;
                };
                "netAmount": {
                    "$ref": string;
                    "description": string;
                };
                "paymentMethod": {
                    "$ref": string;
                    "description": string;
                };
                "paymentStatus": {
                    "type": string;
                    "description": string;
                };
                "placedDate": {
                    "type": string;
                    "description": string;
                };
                "promotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "refunds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shipments": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shippingCost": {
                    "$ref": string;
                    "description": string;
                };
                "shippingCostTax": {
                    "$ref": string;
                    "description": string;
                };
                "shippingOption": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderAddress": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "fullAddress": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "isPostOfficeBox": {
                    "type": string;
                    "description": string;
                };
                "locality": {
                    "type": string;
                    "description": string;
                };
                "postalCode": {
                    "type": string;
                    "description": string;
                };
                "recipientName": {
                    "type": string;
                    "description": string;
                };
                "region": {
                    "type": string;
                    "description": string;
                };
                "streetAddress": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
            };
        };
        "OrderCancellation": {
            "id": string;
            "type": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderCustomer": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                };
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "fullName": {
                    "type": string;
                    "description": string;
                };
                "marketingRightsInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrderCustomerMarketingRightsInfo": {
            "id": string;
            "type": string;
            "properties": {
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "lastUpdatedTimestamp": {
                    "type": string;
                    "description": string;
                };
                "marketingEmailAddress": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderDeliveryDetails": {
            "id": string;
            "type": string;
            "properties": {
                "address": {
                    "$ref": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "annotations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "cancellations": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "product": {
                    "$ref": string;
                    "description": string;
                };
                "quantityCanceled": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityDelivered": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityOrdered": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityPending": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityReturned": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "quantityShipped": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "returnInfo": {
                    "$ref": string;
                    "description": string;
                };
                "returns": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shippingDetails": {
                    "$ref": string;
                    "description": string;
                };
                "tax": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrderLineItemProduct": {
            "id": string;
            "type": string;
            "properties": {
                "brand": {
                    "type": string;
                    "description": string;
                };
                "channel": {
                    "type": string;
                    "description": string;
                };
                "condition": {
                    "type": string;
                    "description": string;
                };
                "contentLanguage": {
                    "type": string;
                    "description": string;
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "imageLink": {
                    "type": string;
                    "description": string;
                };
                "itemGroupId": {
                    "type": string;
                    "description": string;
                };
                "mpn": {
                    "type": string;
                    "description": string;
                };
                "offerId": {
                    "type": string;
                    "description": string;
                };
                "price": {
                    "$ref": string;
                    "description": string;
                };
                "shownImage": {
                    "type": string;
                    "description": string;
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                };
                "title": {
                    "type": string;
                    "description": string;
                };
                "variantAttributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrderLineItemProductVariantAttribute": {
            "id": string;
            "type": string;
            "properties": {
                "dimension": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderLineItemReturnInfo": {
            "id": string;
            "type": string;
            "properties": {
                "daysToReturn": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "isReturnable": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "policyUrl": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "OrderLineItemShippingDetails": {
            "id": string;
            "type": string;
            "properties": {
                "deliverByDate": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "method": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shipByDate": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "OrderLineItemShippingDetailsMethod": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "maxDaysInTransit": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "methodName": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "minDaysInTransit": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "OrderMerchantProvidedAnnotation": {
            "id": string;
            "type": string;
            "properties": {
                "key": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderPaymentMethod": {
            "id": string;
            "type": string;
            "properties": {
                "billingAddress": {
                    "$ref": string;
                    "description": string;
                };
                "expirationMonth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expirationYear": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "lastFourDigits": {
                    "type": string;
                    "description": string;
                };
                "phoneNumber": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderPromotion": {
            "id": string;
            "type": string;
            "properties": {
                "benefits": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "effectiveDates": {
                    "type": string;
                    "description": string;
                };
                "genericRedemptionCode": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "longTitle": {
                    "type": string;
                    "description": string;
                };
                "productApplicability": {
                    "type": string;
                    "description": string;
                };
                "redemptionChannel": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderPromotionBenefit": {
            "id": string;
            "type": string;
            "properties": {
                "discount": {
                    "$ref": string;
                    "description": string;
                };
                "offerIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "subType": {
                    "type": string;
                    "description": string;
                };
                "taxImpact": {
                    "$ref": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderRefund": {
            "id": string;
            "type": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                };
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderReturn": {
            "id": string;
            "type": string;
            "properties": {
                "actor": {
                    "type": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderShipment": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "creationDate": {
                    "type": string;
                    "description": string;
                };
                "deliveryDate": {
                    "type": string;
                    "description": string;
                };
                "id": {
                    "type": string;
                    "description": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderShipmentLineItemShipment": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
            };
        };
        "OrderinvoicesCreateChargeInvoiceRequest": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
                "invoiceSummary": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemInvoices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderinvoicesCreateChargeInvoiceResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrderinvoicesCreateRefundInvoiceRequest": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "refundOnlyOption": {
                    "$ref": string;
                    "description": string;
                };
                "returnOption": {
                    "$ref": string;
                    "description": string;
                };
                "shipmentInvoices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrderinvoicesCreateRefundInvoiceResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption": {
            "id": string;
            "type": string;
            "properties": {
                "description": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyAuthApprovedRequest": {
            "id": string;
            "type": string;
            "properties": {
                "authAmountPretax": {
                    "$ref": string;
                };
                "authAmountTax": {
                    "$ref": string;
                };
            };
        };
        "OrderpaymentsNotifyAuthApprovedResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrderpaymentsNotifyAuthDeclinedRequest": {
            "id": string;
            "type": string;
            "properties": {
                "declineReason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyAuthDeclinedResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrderpaymentsNotifyChargeRequest": {
            "id": string;
            "type": string;
            "properties": {
                "chargeState": {
                    "type": string;
                    "description": string;
                };
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyChargeResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrderpaymentsNotifyRefundRequest": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceId": {
                    "type": string;
                    "description": string;
                };
                "refundState": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrderpaymentsNotifyRefundResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersAcknowledgeRequest": {
            "id": string;
            "type": string;
            "properties": {
                "operationId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersAcknowledgeResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersAdvanceTestOrderResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersCancelLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCancelLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersCancelRequest": {
            "id": string;
            "type": string;
            "properties": {
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCancelResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersCancelTestOrderByCustomerRequest": {
            "id": string;
            "type": string;
            "properties": {
                "reason": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCancelTestOrderByCustomerResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersCreateTestOrderRequest": {
            "id": string;
            "type": string;
            "properties": {
                "country": {
                    "type": string;
                    "description": string;
                };
                "templateName": {
                    "type": string;
                    "description": string;
                };
                "testOrder": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersCreateTestOrderResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequest": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrdersCustomBatchRequestEntry": {
            "id": string;
            "type": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "cancel": {
                    "$ref": string;
                    "description": string;
                };
                "cancelLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "inStoreRefundLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "merchantId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "merchantOrderId": {
                    "type": string;
                    "description": string;
                };
                "method": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "orderId": {
                    "type": string;
                    "description": string;
                };
                "refund": {
                    "$ref": string;
                    "description": string;
                };
                "rejectReturnLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "returnLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "returnRefundLineItem": {
                    "$ref": string;
                    "description": string;
                };
                "setLineItemMetadata": {
                    "$ref": string;
                    "description": string;
                };
                "shipLineItems": {
                    "$ref": string;
                    "description": string;
                };
                "updateLineItemShippingDetails": {
                    "$ref": string;
                    "description": string;
                };
                "updateShipment": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryCancel": {
            "id": string;
            "type": string;
            "properties": {
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryCancelLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryInStoreRefundLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryRefund": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryRejectReturnLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryReturnLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryReturnRefundLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntrySetLineItemMetadata": {
            "id": string;
            "type": string;
            "properties": {
                "annotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryShipLineItems": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "shipmentInfos": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails": {
            "id": string;
            "type": string;
            "properties": {
                "deliverByDate": {
                    "type": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "shipByDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchRequestEntryUpdateShipment": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "deliveryDate": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersCustomBatchResponse": {
            "id": string;
            "type": string;
            "properties": {
                "entries": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersCustomBatchResponseEntry": {
            "id": string;
            "type": string;
            "properties": {
                "batchId": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "errors": {
                    "$ref": string;
                    "description": string;
                };
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "order": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersGetByMerchantOrderIdResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "order": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersGetTestOrderTemplateResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "template": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "OrdersInStoreRefundLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersInStoreRefundLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersListResponse": {
            "id": string;
            "type": string;
            "properties": {
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "nextPageToken": {
                    "type": string;
                    "description": string;
                };
                "resources": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "OrdersRefundRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amount": {
                    "$ref": string;
                    "description": string;
                };
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersRefundResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersRejectReturnLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersRejectReturnLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersReturnLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersReturnLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersReturnRefundLineItemRequest": {
            "id": string;
            "type": string;
            "properties": {
                "amountPretax": {
                    "$ref": string;
                    "description": string;
                };
                "amountTax": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "quantity": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "reason": {
                    "type": string;
                    "description": string;
                };
                "reasonText": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersReturnRefundLineItemResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersSetLineItemMetadataRequest": {
            "id": string;
            "type": string;
            "properties": {
                "annotations": {
                    "type": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersSetLineItemMetadataResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersShipLineItemsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "shipmentInfos": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersShipLineItemsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersUpdateLineItemShippingDetailsRequest": {
            "id": string;
            "type": string;
            "properties": {
                "deliverByDate": {
                    "type": string;
                    "description": string;
                };
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "shipByDate": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersUpdateLineItemShippingDetailsResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersUpdateMerchantOrderIdRequest": {
            "id": string;
            "type": string;
            "properties": {
                "merchantOrderId": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersUpdateMerchantOrderIdResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "OrdersUpdateShipmentRequest": {
            "id": string;
            "type": string;
            "properties": {
                "carrier": {
                    "type": string;
                    "description": string;
                };
                "deliveryDate": {
                    "type": string;
                    "description": string;
                };
                "operationId": {
                    "type": string;
                    "description": string;
                };
                "shipmentId": {
                    "type": string;
                    "description": string;
                };
                "status": {
                    "type": string;
                    "description": string;
                };
                "trackingId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "OrdersUpdateShipmentResponse": {
            "id": string;
            "type": string;
            "properties": {
                "executionStatus": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
            };
        };
        "Price": {
            "id": string;
            "type": string;
            "properties": {
                "currency": {
                    "type": string;
                    "description": string;
                };
                "value": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "Promotion": {
            "id": string;
            "type": string;
            "properties": {
                "promotionAmount": {
                    "$ref": string;
                    "description": string;
                };
                "promotionId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ShipmentInvoice": {
            "id": string;
            "type": string;
            "properties": {
                "invoiceSummary": {
                    "$ref": string;
                    "description": string;
                };
                "lineItemInvoices": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shipmentGroupId": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "ShipmentInvoiceLineItemInvoice": {
            "id": string;
            "type": string;
            "properties": {
                "lineItemId": {
                    "type": string;
                    "description": string;
                };
                "productId": {
                    "type": string;
                    "description": string;
                };
                "shipmentUnitIds": {
                    "type": string;
                    "description": string;
                    "items": {
                        "type": string;
                    };
                };
                "unitInvoice": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TestOrder": {
            "id": string;
            "type": string;
            "properties": {
                "customer": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "enableOrderinvoices": {
                    "type": string;
                    "description": string;
                };
                "kind": {
                    "type": string;
                    "description": string;
                    "default": string;
                };
                "lineItems": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                    "annotations": {
                        "required": string[];
                    };
                };
                "notificationMode": {
                    "type": string;
                    "description": string;
                };
                "paymentMethod": {
                    "$ref": string;
                    "description": string;
                };
                "predefinedDeliveryAddress": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "promotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "shippingCost": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shippingCostTax": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shippingOption": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "TestOrderCustomer": {
            "id": string;
            "type": string;
            "properties": {
                "email": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "fullName": {
                    "type": string;
                    "description": string;
                };
                "marketingRightsInfo": {
                    "$ref": string;
                    "description": string;
                };
            };
        };
        "TestOrderCustomerMarketingRightsInfo": {
            "id": string;
            "type": string;
            "properties": {
                "explicitMarketingPreference": {
                    "type": string;
                    "description": string;
                };
                "lastUpdatedTimestamp": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "TestOrderLineItem": {
            "id": string;
            "type": string;
            "properties": {
                "product": {
                    "$ref": string;
                    "description": string;
                };
                "quantityOrdered": {
                    "type": string;
                    "description": string;
                    "format": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "returnInfo": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "shippingDetails": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "unitTax": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
            };
        };
        "TestOrderLineItemProduct": {
            "id": string;
            "type": string;
            "properties": {
                "brand": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "channel": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "condition": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "contentLanguage": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "gtin": {
                    "type": string;
                    "description": string;
                };
                "imageLink": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "itemGroupId": {
                    "type": string;
                    "description": string;
                };
                "mpn": {
                    "type": string;
                    "description": string;
                };
                "offerId": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "price": {
                    "$ref": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "targetCountry": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "title": {
                    "type": string;
                    "description": string;
                    "annotations": {
                        "required": string[];
                    };
                };
                "variantAttributes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "TestOrderPaymentMethod": {
            "id": string;
            "type": string;
            "properties": {
                "expirationMonth": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "expirationYear": {
                    "type": string;
                    "description": string;
                    "format": string;
                };
                "lastFourDigits": {
                    "type": string;
                    "description": string;
                };
                "predefinedBillingAddress": {
                    "type": string;
                    "description": string;
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UnitInvoice": {
            "id": string;
            "type": string;
            "properties": {
                "additionalCharges": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "promotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "unitPricePretax": {
                    "$ref": string;
                    "description": string;
                };
                "unitPriceTaxes": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
            };
        };
        "UnitInvoiceAdditionalCharge": {
            "id": string;
            "type": string;
            "properties": {
                "additionalChargeAmount": {
                    "$ref": string;
                    "description": string;
                };
                "additionalChargePromotions": {
                    "type": string;
                    "description": string;
                    "items": {
                        "$ref": string;
                    };
                };
                "type": {
                    "type": string;
                    "description": string;
                };
            };
        };
        "UnitInvoiceTaxLine": {
            "id": string;
            "type": string;
            "properties": {
                "taxAmount": {
                    "$ref": string;
                    "description": string;
                };
                "taxName": {
                    "type": string;
                    "description": string;
                };
                "taxType": {
                    "type": string;
                    "description": string;
                };
            };
        };
    };
    "resources": {
        "orderinvoices": {
            "methods": {
                "createchargeinvoice": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "createrefundinvoice": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "orderpayments": {
            "methods": {
                "notifyauthapproved": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "notifyauthdeclined": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "notifycharge": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "notifyrefund": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
        "orders": {
            "methods": {
                "acknowledge": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "advancetestorder": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "cancel": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "cancellineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "canceltestorderbycustomer": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "createtestorder": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "custombatch": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "get": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "getbymerchantorderid": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "merchantOrderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "gettestordertemplate": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "country": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "templateName": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "instorerefundlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "list": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "acknowledged": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "maxResults": {
                            "type": string;
                            "description": string;
                            "format": string;
                            "location": string;
                        };
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderBy": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "location": string;
                        };
                        "pageToken": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "placedDateEnd": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "placedDateStart": {
                            "type": string;
                            "description": string;
                            "location": string;
                        };
                        "statuses": {
                            "type": string;
                            "description": string;
                            "enum": string[];
                            "enumDescriptions": string[];
                            "repeated": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "refund": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "rejectreturnlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "returnlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "returnrefundlineitem": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "setlineitemmetadata": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "shiplineitems": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "updatelineitemshippingdetails": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "updatemerchantorderid": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
                "updateshipment": {
                    "id": string;
                    "path": string;
                    "httpMethod": string;
                    "description": string;
                    "parameters": {
                        "merchantId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "format": string;
                            "location": string;
                        };
                        "orderId": {
                            "type": string;
                            "description": string;
                            "required": boolean;
                            "location": string;
                        };
                    };
                    "parameterOrder": string[];
                    "request": {
                        "$ref": string;
                    };
                    "response": {
                        "$ref": string;
                    };
                    "scopes": string[];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=content-v2sandbox.d.ts.map