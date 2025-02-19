var LAYER_NUMBER = 199

var SCHEMA_GLOBAL = {
  "constructors": [
    {
      "id": 3162085175,
      "predicate": "boolFalse",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2574415285,
      "predicate": "boolTrue",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 1072550713,
      "predicate": "true",
      "params": [],
      "type": "True"
    },
    {
      "id": 481674261,
      "predicate": "vector",
      "params": [],
      "type": "Vector t"
    },
    {
      "id": 3300522427,
      "predicate": "error",
      "params": [
        {
          "name": "code",
          "type": "int"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "Error"
    },
    {
      "id": 1450380236,
      "predicate": "null",
      "params": [],
      "type": "Null"
    },
    {
      "id": 2134579434,
      "predicate": "inputPeerEmpty",
      "params": [],
      "type": "InputPeer"
    },
    {
      "id": 2107670217,
      "predicate": "inputPeerSelf",
      "params": [],
      "type": "InputPeer"
    },
    {
      "id": 900291769,
      "predicate": "inputPeerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 3723011404,
      "predicate": "inputPeerUser",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 666680316,
      "predicate": "inputPeerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 2826635804,
      "predicate": "inputPeerUserFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 3173648448,
      "predicate": "inputPeerChannelFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 3112732367,
      "predicate": "inputUserEmpty",
      "params": [],
      "type": "InputUser"
    },
    {
      "id": 4156666175,
      "predicate": "inputUserSelf",
      "params": [],
      "type": "InputUser"
    },
    {
      "id": 4061223110,
      "predicate": "inputUser",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputUser"
    },
    {
      "id": 497305826,
      "predicate": "inputUserFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "InputUser"
    },
    {
      "id": 4086478836,
      "predicate": "inputPhoneContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "InputContact"
    },
    {
      "id": 4113560191,
      "predicate": "inputFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    {
      "id": 4199484341,
      "predicate": "inputFileBig",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    {
      "id": 1658620744,
      "predicate": "inputFileStoryDocument",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        }
      ],
      "type": "InputFile"
    },
    {
      "id": 2523198847,
      "predicate": "inputMediaEmpty",
      "params": [],
      "type": "InputMedia"
    },
    {
      "id": 505969924,
      "predicate": "inputMediaUploadedPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "spoiler",
          "type": "flags.2?true"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector<InputDocument>"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3015312949,
      "predicate": "inputMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "spoiler",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputPhoto"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 4190388548,
      "predicate": "inputMediaGeoPoint",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 4171988475,
      "predicate": "inputMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 58495792,
      "predicate": "inputMediaUploadedDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "nosound_video",
          "type": "flags.3?true"
        },
        {
          "name": "force_file",
          "type": "flags.4?true"
        },
        {
          "name": "spoiler",
          "type": "flags.5?true"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "thumb",
          "type": "flags.2?InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector<InputDocument>"
        },
        {
          "name": "video_cover",
          "type": "flags.6?InputPhoto"
        },
        {
          "name": "video_timestamp",
          "type": "flags.7?int"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 2826320565,
      "predicate": "inputMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "spoiler",
          "type": "flags.2?true"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "video_cover",
          "type": "flags.3?InputPhoto"
        },
        {
          "name": "video_timestamp",
          "type": "flags.4?int"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        },
        {
          "name": "query",
          "type": "flags.1?string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3242007569,
      "predicate": "inputMediaVenue",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3854302746,
      "predicate": "inputMediaPhotoExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "spoiler",
          "type": "flags.1?true"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 2006319353,
      "predicate": "inputMediaDocumentExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "spoiler",
          "type": "flags.1?true"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        },
        {
          "name": "video_cover",
          "type": "flags.2?InputPhoto"
        },
        {
          "name": "video_timestamp",
          "type": "flags.3?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3544138739,
      "predicate": "inputMediaGame",
      "params": [
        {
          "name": "id",
          "type": "InputGame"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 1080028941,
      "predicate": "inputMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?InputWebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "provider",
          "type": "flags.3?string"
        },
        {
          "name": "provider_data",
          "type": "DataJSON"
        },
        {
          "name": "start_param",
          "type": "flags.1?string"
        },
        {
          "name": "extended_media",
          "type": "flags.2?InputMedia"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 2535434307,
      "predicate": "inputMediaGeoLive",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stopped",
          "type": "flags.0?true"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.2?int"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.3?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 261416433,
      "predicate": "inputMediaPoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "poll",
          "type": "Poll"
        },
        {
          "name": "correct_answers",
          "type": "flags.0?Vector<bytes>"
        },
        {
          "name": "solution",
          "type": "flags.1?string"
        },
        {
          "name": "solution_entities",
          "type": "flags.1?Vector<MessageEntity>"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3866083195,
      "predicate": "inputMediaDice",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 2315114360,
      "predicate": "inputMediaStory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3256584265,
      "predicate": "inputMediaWebPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force_large_media",
          "type": "flags.0?true"
        },
        {
          "name": "force_small_media",
          "type": "flags.1?true"
        },
        {
          "name": "optional",
          "type": "flags.2?true"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3289396102,
      "predicate": "inputMediaPaidMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stars_amount",
          "type": "long"
        },
        {
          "name": "extended_media",
          "type": "Vector<InputMedia>"
        },
        {
          "name": "payload",
          "type": "flags.0?string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 480546647,
      "predicate": "inputChatPhotoEmpty",
      "params": [],
      "type": "InputChatPhoto"
    },
    {
      "id": 3184373440,
      "predicate": "inputChatUploadedPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "flags.0?InputFile"
        },
        {
          "name": "video",
          "type": "flags.1?InputFile"
        },
        {
          "name": "video_start_ts",
          "type": "flags.2?double"
        },
        {
          "name": "video_emoji_markup",
          "type": "flags.3?VideoSize"
        }
      ],
      "type": "InputChatPhoto"
    },
    {
      "id": 2303962423,
      "predicate": "inputChatPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputChatPhoto"
    },
    {
      "id": 3837862870,
      "predicate": "inputGeoPointEmpty",
      "params": [],
      "type": "InputGeoPoint"
    },
    {
      "id": 1210199983,
      "predicate": "inputGeoPoint",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "long",
          "type": "double"
        },
        {
          "name": "accuracy_radius",
          "type": "flags.0?int"
        }
      ],
      "type": "InputGeoPoint"
    },
    {
      "id": 483901197,
      "predicate": "inputPhotoEmpty",
      "params": [],
      "type": "InputPhoto"
    },
    {
      "id": 1001634122,
      "predicate": "inputPhoto",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputPhoto"
    },
    {
      "id": 3755650017,
      "predicate": "inputFileLocation",
      "params": [
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 4112735573,
      "predicate": "inputEncryptedFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 3134223748,
      "predicate": "inputDocumentFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 3418877480,
      "predicate": "inputSecureFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 700340377,
      "predicate": "inputTakeoutFileLocation",
      "params": [],
      "type": "InputFileLocation"
    },
    {
      "id": 1075322878,
      "predicate": "inputPhotoFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 3627312883,
      "predicate": "inputPhotoLegacyFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 925204121,
      "predicate": "inputPeerPhotoFileLocation",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "big",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "photo_id",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 2642736091,
      "predicate": "inputStickerSetThumb",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "thumb_version",
          "type": "int"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 93890858,
      "predicate": "inputGroupCallStream",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "time_ms",
          "type": "long"
        },
        {
          "name": "scale",
          "type": "int"
        },
        {
          "name": "video_channel",
          "type": "flags.0?int"
        },
        {
          "name": "video_quality",
          "type": "flags.0?int"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 1498486562,
      "predicate": "peerUser",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "Peer"
    },
    {
      "id": 918946202,
      "predicate": "peerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "Peer"
    },
    {
      "id": 2728736542,
      "predicate": "peerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        }
      ],
      "type": "Peer"
    },
    {
      "id": 2861972229,
      "predicate": "storage.fileUnknown",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 1086091090,
      "predicate": "storage.filePartial",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 8322574,
      "predicate": "storage.fileJpeg",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 3403786975,
      "predicate": "storage.fileGif",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 172975040,
      "predicate": "storage.filePng",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 2921222285,
      "predicate": "storage.filePdf",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 1384777335,
      "predicate": "storage.fileMp3",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 1258941372,
      "predicate": "storage.fileMov",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 3016663268,
      "predicate": "storage.fileMp4",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 276907596,
      "predicate": "storage.fileWebp",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 3552332666,
      "predicate": "userEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "User"
    },
    {
      "id": 1262928766,
      "predicate": "user",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "self",
          "type": "flags.10?true"
        },
        {
          "name": "contact",
          "type": "flags.11?true"
        },
        {
          "name": "mutual_contact",
          "type": "flags.12?true"
        },
        {
          "name": "deleted",
          "type": "flags.13?true"
        },
        {
          "name": "bot",
          "type": "flags.14?true"
        },
        {
          "name": "bot_chat_history",
          "type": "flags.15?true"
        },
        {
          "name": "bot_nochats",
          "type": "flags.16?true"
        },
        {
          "name": "verified",
          "type": "flags.17?true"
        },
        {
          "name": "restricted",
          "type": "flags.18?true"
        },
        {
          "name": "min",
          "type": "flags.20?true"
        },
        {
          "name": "bot_inline_geo",
          "type": "flags.21?true"
        },
        {
          "name": "support",
          "type": "flags.23?true"
        },
        {
          "name": "scam",
          "type": "flags.24?true"
        },
        {
          "name": "apply_min_photo",
          "type": "flags.25?true"
        },
        {
          "name": "fake",
          "type": "flags.26?true"
        },
        {
          "name": "bot_attach_menu",
          "type": "flags.27?true"
        },
        {
          "name": "premium",
          "type": "flags.28?true"
        },
        {
          "name": "attach_menu_enabled",
          "type": "flags.29?true"
        },
        {
          "name": "flags2",
          "type": "#"
        },
        {
          "name": "bot_can_edit",
          "type": "flags2.1?true"
        },
        {
          "name": "close_friend",
          "type": "flags2.2?true"
        },
        {
          "name": "stories_hidden",
          "type": "flags2.3?true"
        },
        {
          "name": "stories_unavailable",
          "type": "flags2.4?true"
        },
        {
          "name": "contact_require_premium",
          "type": "flags2.10?true"
        },
        {
          "name": "bot_business",
          "type": "flags2.11?true"
        },
        {
          "name": "bot_has_main_app",
          "type": "flags2.13?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "flags.0?long"
        },
        {
          "name": "first_name",
          "type": "flags.1?string"
        },
        {
          "name": "last_name",
          "type": "flags.2?string"
        },
        {
          "name": "username",
          "type": "flags.3?string"
        },
        {
          "name": "phone",
          "type": "flags.4?string"
        },
        {
          "name": "photo",
          "type": "flags.5?UserProfilePhoto"
        },
        {
          "name": "status",
          "type": "flags.6?UserStatus"
        },
        {
          "name": "bot_info_version",
          "type": "flags.14?int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.18?Vector<RestrictionReason>"
        },
        {
          "name": "bot_inline_placeholder",
          "type": "flags.19?string"
        },
        {
          "name": "lang_code",
          "type": "flags.22?string"
        },
        {
          "name": "emoji_status",
          "type": "flags.30?EmojiStatus"
        },
        {
          "name": "usernames",
          "type": "flags2.0?Vector<Username>"
        },
        {
          "name": "stories_max_id",
          "type": "flags2.5?int"
        },
        {
          "name": "color",
          "type": "flags2.8?PeerColor"
        },
        {
          "name": "profile_color",
          "type": "flags2.9?PeerColor"
        },
        {
          "name": "bot_active_users",
          "type": "flags2.12?int"
        },
        {
          "name": "bot_verification_icon",
          "type": "flags2.14?long"
        }
      ],
      "type": "User"
    },
    {
      "id": 1326562017,
      "predicate": "userProfilePhotoEmpty",
      "params": [],
      "type": "UserProfilePhoto"
    },
    {
      "id": 2194798342,
      "predicate": "userProfilePhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_video",
          "type": "flags.0?true"
        },
        {
          "name": "personal",
          "type": "flags.2?true"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "stripped_thumb",
          "type": "flags.1?bytes"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "UserProfilePhoto"
    },
    {
      "id": 164646985,
      "predicate": "userStatusEmpty",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": 3988339017,
      "predicate": "userStatusOnline",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": 9203775,
      "predicate": "userStatusOffline",
      "params": [
        {
          "name": "was_online",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": 2065268168,
      "predicate": "userStatusRecently",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "by_me",
          "type": "flags.0?true"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": 1410997530,
      "predicate": "userStatusLastWeek",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "by_me",
          "type": "flags.0?true"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": 1703516023,
      "predicate": "userStatusLastMonth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "by_me",
          "type": "flags.0?true"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": 693512293,
      "predicate": "chatEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 1103884886,
      "predicate": "chat",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "deactivated",
          "type": "flags.5?true"
        },
        {
          "name": "call_active",
          "type": "flags.23?true"
        },
        {
          "name": "call_not_empty",
          "type": "flags.24?true"
        },
        {
          "name": "noforwards",
          "type": "flags.25?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "migrated_to",
          "type": "flags.6?InputChannel"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 1704108455,
      "predicate": "chatForbidden",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 3758725303,
      "predicate": "channel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "verified",
          "type": "flags.7?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "restricted",
          "type": "flags.9?true"
        },
        {
          "name": "signatures",
          "type": "flags.11?true"
        },
        {
          "name": "min",
          "type": "flags.12?true"
        },
        {
          "name": "scam",
          "type": "flags.19?true"
        },
        {
          "name": "has_link",
          "type": "flags.20?true"
        },
        {
          "name": "has_geo",
          "type": "flags.21?true"
        },
        {
          "name": "slowmode_enabled",
          "type": "flags.22?true"
        },
        {
          "name": "call_active",
          "type": "flags.23?true"
        },
        {
          "name": "call_not_empty",
          "type": "flags.24?true"
        },
        {
          "name": "fake",
          "type": "flags.25?true"
        },
        {
          "name": "gigagroup",
          "type": "flags.26?true"
        },
        {
          "name": "noforwards",
          "type": "flags.27?true"
        },
        {
          "name": "join_to_send",
          "type": "flags.28?true"
        },
        {
          "name": "join_request",
          "type": "flags.29?true"
        },
        {
          "name": "forum",
          "type": "flags.30?true"
        },
        {
          "name": "flags2",
          "type": "#"
        },
        {
          "name": "stories_hidden",
          "type": "flags2.1?true"
        },
        {
          "name": "stories_hidden_min",
          "type": "flags2.2?true"
        },
        {
          "name": "stories_unavailable",
          "type": "flags2.3?true"
        },
        {
          "name": "signature_profiles",
          "type": "flags2.12?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "flags.13?long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "username",
          "type": "flags.6?string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.9?Vector<RestrictionReason>"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "banned_rights",
          "type": "flags.15?ChatBannedRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        },
        {
          "name": "participants_count",
          "type": "flags.17?int"
        },
        {
          "name": "usernames",
          "type": "flags2.0?Vector<Username>"
        },
        {
          "name": "stories_max_id",
          "type": "flags2.4?int"
        },
        {
          "name": "color",
          "type": "flags2.7?PeerColor"
        },
        {
          "name": "profile_color",
          "type": "flags2.8?PeerColor"
        },
        {
          "name": "emoji_status",
          "type": "flags2.9?EmojiStatus"
        },
        {
          "name": "level",
          "type": "flags2.10?int"
        },
        {
          "name": "subscription_until_date",
          "type": "flags2.11?int"
        },
        {
          "name": "bot_verification_icon",
          "type": "flags2.13?long"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 399807445,
      "predicate": "channelForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "until_date",
          "type": "flags.16?int"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 640893467,
      "predicate": "chatFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_set_username",
          "type": "flags.7?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.8?true"
        },
        {
          "name": "translations_disabled",
          "type": "flags.19?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants",
          "type": "ChatParticipants"
        },
        {
          "name": "chat_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "flags.13?ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "flags.3?Vector<BotInfo>"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        },
        {
          "name": "call",
          "type": "flags.12?InputGroupCall"
        },
        {
          "name": "ttl_period",
          "type": "flags.14?int"
        },
        {
          "name": "groupcall_default_join_as",
          "type": "flags.15?Peer"
        },
        {
          "name": "theme_emoticon",
          "type": "flags.16?string"
        },
        {
          "name": "requests_pending",
          "type": "flags.17?int"
        },
        {
          "name": "recent_requesters",
          "type": "flags.17?Vector<long>"
        },
        {
          "name": "available_reactions",
          "type": "flags.18?ChatReactions"
        },
        {
          "name": "reactions_limit",
          "type": "flags.20?int"
        }
      ],
      "type": "ChatFull"
    },
    {
      "id": 1389789291,
      "predicate": "channelFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_view_participants",
          "type": "flags.3?true"
        },
        {
          "name": "can_set_username",
          "type": "flags.6?true"
        },
        {
          "name": "can_set_stickers",
          "type": "flags.7?true"
        },
        {
          "name": "hidden_prehistory",
          "type": "flags.10?true"
        },
        {
          "name": "can_set_location",
          "type": "flags.16?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.19?true"
        },
        {
          "name": "can_view_stats",
          "type": "flags.20?true"
        },
        {
          "name": "blocked",
          "type": "flags.22?true"
        },
        {
          "name": "flags2",
          "type": "#"
        },
        {
          "name": "can_delete_channel",
          "type": "flags2.0?true"
        },
        {
          "name": "antispam",
          "type": "flags2.1?true"
        },
        {
          "name": "participants_hidden",
          "type": "flags2.2?true"
        },
        {
          "name": "translations_disabled",
          "type": "flags2.3?true"
        },
        {
          "name": "stories_pinned_available",
          "type": "flags2.5?true"
        },
        {
          "name": "view_forum_as_messages",
          "type": "flags2.6?true"
        },
        {
          "name": "restricted_sponsored",
          "type": "flags2.11?true"
        },
        {
          "name": "can_view_revenue",
          "type": "flags2.12?true"
        },
        {
          "name": "paid_media_allowed",
          "type": "flags2.14?true"
        },
        {
          "name": "can_view_stars_revenue",
          "type": "flags2.15?true"
        },
        {
          "name": "paid_reactions_available",
          "type": "flags2.16?true"
        },
        {
          "name": "stargifts_available",
          "type": "flags2.19?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants_count",
          "type": "flags.0?int"
        },
        {
          "name": "admins_count",
          "type": "flags.1?int"
        },
        {
          "name": "kicked_count",
          "type": "flags.2?int"
        },
        {
          "name": "banned_count",
          "type": "flags.2?int"
        },
        {
          "name": "online_count",
          "type": "flags.13?int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "chat_photo",
          "type": "Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "flags.23?ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "Vector<BotInfo>"
        },
        {
          "name": "migrated_from_chat_id",
          "type": "flags.4?long"
        },
        {
          "name": "migrated_from_max_id",
          "type": "flags.4?int"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.5?int"
        },
        {
          "name": "stickerset",
          "type": "flags.8?StickerSet"
        },
        {
          "name": "available_min_id",
          "type": "flags.9?int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        },
        {
          "name": "linked_chat_id",
          "type": "flags.14?long"
        },
        {
          "name": "location",
          "type": "flags.15?ChannelLocation"
        },
        {
          "name": "slowmode_seconds",
          "type": "flags.17?int"
        },
        {
          "name": "slowmode_next_send_date",
          "type": "flags.18?int"
        },
        {
          "name": "stats_dc",
          "type": "flags.12?int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "call",
          "type": "flags.21?InputGroupCall"
        },
        {
          "name": "ttl_period",
          "type": "flags.24?int"
        },
        {
          "name": "pending_suggestions",
          "type": "flags.25?Vector<string>"
        },
        {
          "name": "groupcall_default_join_as",
          "type": "flags.26?Peer"
        },
        {
          "name": "theme_emoticon",
          "type": "flags.27?string"
        },
        {
          "name": "requests_pending",
          "type": "flags.28?int"
        },
        {
          "name": "recent_requesters",
          "type": "flags.28?Vector<long>"
        },
        {
          "name": "default_send_as",
          "type": "flags.29?Peer"
        },
        {
          "name": "available_reactions",
          "type": "flags.30?ChatReactions"
        },
        {
          "name": "reactions_limit",
          "type": "flags2.13?int"
        },
        {
          "name": "stories",
          "type": "flags2.4?PeerStories"
        },
        {
          "name": "wallpaper",
          "type": "flags2.7?WallPaper"
        },
        {
          "name": "boosts_applied",
          "type": "flags2.8?int"
        },
        {
          "name": "boosts_unrestrict",
          "type": "flags2.9?int"
        },
        {
          "name": "emojiset",
          "type": "flags2.10?StickerSet"
        },
        {
          "name": "bot_verification",
          "type": "flags2.17?BotVerification"
        },
        {
          "name": "stargifts_count",
          "type": "flags2.18?int"
        }
      ],
      "type": "ChatFull"
    },
    {
      "id": 3224190983,
      "predicate": "chatParticipant",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "inviter_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": 3832270564,
      "predicate": "chatParticipantCreator",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": 2694004571,
      "predicate": "chatParticipantAdmin",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "inviter_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": 2271466465,
      "predicate": "chatParticipantsForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "self_participant",
          "type": "flags.0?ChatParticipant"
        }
      ],
      "type": "ChatParticipants"
    },
    {
      "id": 1018991608,
      "predicate": "chatParticipants",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "participants",
          "type": "Vector<ChatParticipant>"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "ChatParticipants"
    },
    {
      "id": 935395612,
      "predicate": "chatPhotoEmpty",
      "params": [],
      "type": "ChatPhoto"
    },
    {
      "id": 476978193,
      "predicate": "chatPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_video",
          "type": "flags.0?true"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "stripped_thumb",
          "type": "flags.1?bytes"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "ChatPhoto"
    },
    {
      "id": 2426849924,
      "predicate": "messageEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "peer_id",
          "type": "flags.0?Peer"
        }
      ],
      "type": "Message"
    },
    {
      "id": 2533211113,
      "predicate": "message",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "from_scheduled",
          "type": "flags.18?true"
        },
        {
          "name": "legacy",
          "type": "flags.19?true"
        },
        {
          "name": "edit_hide",
          "type": "flags.21?true"
        },
        {
          "name": "pinned",
          "type": "flags.24?true"
        },
        {
          "name": "noforwards",
          "type": "flags.26?true"
        },
        {
          "name": "invert_media",
          "type": "flags.27?true"
        },
        {
          "name": "flags2",
          "type": "#"
        },
        {
          "name": "offline",
          "type": "flags2.1?true"
        },
        {
          "name": "video_processing_pending",
          "type": "flags2.4?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?Peer"
        },
        {
          "name": "from_boosts_applied",
          "type": "flags.29?int"
        },
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "saved_peer_id",
          "type": "flags.28?Peer"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?long"
        },
        {
          "name": "via_business_bot_id",
          "type": "flags2.0?long"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.6?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "views",
          "type": "flags.10?int"
        },
        {
          "name": "forwards",
          "type": "flags.10?int"
        },
        {
          "name": "replies",
          "type": "flags.23?MessageReplies"
        },
        {
          "name": "edit_date",
          "type": "flags.15?int"
        },
        {
          "name": "post_author",
          "type": "flags.16?string"
        },
        {
          "name": "grouped_id",
          "type": "flags.17?long"
        },
        {
          "name": "reactions",
          "type": "flags.20?MessageReactions"
        },
        {
          "name": "restriction_reason",
          "type": "flags.22?Vector<RestrictionReason>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        },
        {
          "name": "quick_reply_shortcut_id",
          "type": "flags.30?int"
        },
        {
          "name": "effect",
          "type": "flags2.2?long"
        },
        {
          "name": "factcheck",
          "type": "flags2.3?FactCheck"
        },
        {
          "name": "report_delivery_until_date",
          "type": "flags2.5?int"
        }
      ],
      "type": "Message"
    },
    {
      "id": 3553789248,
      "predicate": "messageService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "reactions_are_possible",
          "type": "flags.9?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "legacy",
          "type": "flags.19?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?Peer"
        },
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "action",
          "type": "MessageAction"
        },
        {
          "name": "reactions",
          "type": "flags.20?MessageReactions"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Message"
    },
    {
      "id": 1038967584,
      "predicate": "messageMediaEmpty",
      "params": [],
      "type": "MessageMedia"
    },
    {
      "id": 1766936791,
      "predicate": "messageMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "spoiler",
          "type": "flags.3?true"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1457575028,
      "predicate": "messageMediaGeo",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1882335561,
      "predicate": "messageMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 2676290718,
      "predicate": "messageMediaUnsupported",
      "params": [],
      "type": "MessageMedia"
    },
    {
      "id": 1389939929,
      "predicate": "messageMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "nopremium",
          "type": "flags.3?true"
        },
        {
          "name": "spoiler",
          "type": "flags.4?true"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "round",
          "type": "flags.7?true"
        },
        {
          "name": "voice",
          "type": "flags.8?true"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        },
        {
          "name": "alt_documents",
          "type": "flags.5?Vector<Document>"
        },
        {
          "name": "video_cover",
          "type": "flags.9?Photo"
        },
        {
          "name": "video_timestamp",
          "type": "flags.10?int"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3723562043,
      "predicate": "messageMediaWebPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force_large_media",
          "type": "flags.0?true"
        },
        {
          "name": "force_small_media",
          "type": "flags.1?true"
        },
        {
          "name": "manual",
          "type": "flags.3?true"
        },
        {
          "name": "safe",
          "type": "flags.4?true"
        },
        {
          "name": "webpage",
          "type": "WebPage"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 784356159,
      "predicate": "messageMediaVenue",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 4256272392,
      "predicate": "messageMediaGame",
      "params": [
        {
          "name": "game",
          "type": "Game"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 4138027219,
      "predicate": "messageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.1?true"
        },
        {
          "name": "test",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?WebDocument"
        },
        {
          "name": "receipt_msg_id",
          "type": "flags.2?int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        },
        {
          "name": "extended_media",
          "type": "flags.4?MessageExtendedMedia"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3108030054,
      "predicate": "messageMediaGeoLive",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.0?int"
        },
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.1?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1272375192,
      "predicate": "messageMediaPoll",
      "params": [
        {
          "name": "poll",
          "type": "Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1065280907,
      "predicate": "messageMediaDice",
      "params": [
        {
          "name": "value",
          "type": "int"
        },
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1758159491,
      "predicate": "messageMediaStory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "via_mention",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "story",
          "type": "flags.0?StoryItem"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 2852600811,
      "predicate": "messageMediaGiveaway",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "only_new_subscribers",
          "type": "flags.0?true"
        },
        {
          "name": "winners_are_visible",
          "type": "flags.2?true"
        },
        {
          "name": "channels",
          "type": "Vector<long>"
        },
        {
          "name": "countries_iso2",
          "type": "flags.1?Vector<string>"
        },
        {
          "name": "prize_description",
          "type": "flags.3?string"
        },
        {
          "name": "quantity",
          "type": "int"
        },
        {
          "name": "months",
          "type": "flags.4?int"
        },
        {
          "name": "stars",
          "type": "flags.5?long"
        },
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3467263649,
      "predicate": "messageMediaGiveawayResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "only_new_subscribers",
          "type": "flags.0?true"
        },
        {
          "name": "refunded",
          "type": "flags.2?true"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "additional_peers_count",
          "type": "flags.3?int"
        },
        {
          "name": "launch_msg_id",
          "type": "int"
        },
        {
          "name": "winners_count",
          "type": "int"
        },
        {
          "name": "unclaimed_count",
          "type": "int"
        },
        {
          "name": "winners",
          "type": "Vector<long>"
        },
        {
          "name": "months",
          "type": "flags.4?int"
        },
        {
          "name": "stars",
          "type": "flags.5?long"
        },
        {
          "name": "prize_description",
          "type": "flags.1?string"
        },
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 2827297937,
      "predicate": "messageMediaPaidMedia",
      "params": [
        {
          "name": "stars_amount",
          "type": "long"
        },
        {
          "name": "extended_media",
          "type": "Vector<MessageExtendedMedia>"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3064919984,
      "predicate": "messageActionEmpty",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 3175599021,
      "predicate": "messageActionChatCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector<long>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3047280218,
      "predicate": "messageActionChatEditTitle",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2144015272,
      "predicate": "messageActionChatEditPhoto",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2514746351,
      "predicate": "messageActionChatDeletePhoto",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 365886720,
      "predicate": "messageActionChatAddUser",
      "params": [
        {
          "name": "users",
          "type": "Vector<long>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2755604684,
      "predicate": "messageActionChatDeleteUser",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 51520707,
      "predicate": "messageActionChatJoinedByLink",
      "params": [
        {
          "name": "inviter_id",
          "type": "long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2513611922,
      "predicate": "messageActionChannelCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3775102866,
      "predicate": "messageActionChatMigrateTo",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3929622761,
      "predicate": "messageActionChannelMigrateFrom",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2495428845,
      "predicate": "messageActionPinMessage",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 2679813636,
      "predicate": "messageActionHistoryClear",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 2460428406,
      "predicate": "messageActionGameScore",
      "params": [
        {
          "name": "game_id",
          "type": "long"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 4288679116,
      "predicate": "messageActionPaymentSentMe",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "recurring_init",
          "type": "flags.2?true"
        },
        {
          "name": "recurring_used",
          "type": "flags.3?true"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "charge",
          "type": "PaymentCharge"
        },
        {
          "name": "subscription_until_date",
          "type": "flags.4?int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3324293486,
      "predicate": "messageActionPaymentSent",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "recurring_init",
          "type": "flags.2?true"
        },
        {
          "name": "recurring_used",
          "type": "flags.3?true"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "invoice_slug",
          "type": "flags.0?string"
        },
        {
          "name": "subscription_until_date",
          "type": "flags.4?int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2162236031,
      "predicate": "messageActionPhoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.2?true"
        },
        {
          "name": "call_id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1200788123,
      "predicate": "messageActionScreenshotTaken",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 4209418070,
      "predicate": "messageActionCustomAction",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3306608249,
      "predicate": "messageActionBotAllowed",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attach_menu",
          "type": "flags.1?true"
        },
        {
          "name": "from_request",
          "type": "flags.3?true"
        },
        {
          "name": "domain",
          "type": "flags.0?string"
        },
        {
          "name": "app",
          "type": "flags.2?BotApp"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 455635795,
      "predicate": "messageActionSecureValuesSentMe",
      "params": [
        {
          "name": "values",
          "type": "Vector<SecureValue>"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3646710100,
      "predicate": "messageActionSecureValuesSent",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 4092747638,
      "predicate": "messageActionContactSignUp",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 2564871831,
      "predicate": "messageActionGeoProximityReached",
      "params": [
        {
          "name": "from_id",
          "type": "Peer"
        },
        {
          "name": "to_id",
          "type": "Peer"
        },
        {
          "name": "distance",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2047704898,
      "predicate": "messageActionGroupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "duration",
          "type": "flags.0?int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1345295095,
      "predicate": "messageActionInviteToGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "users",
          "type": "Vector<long>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1007897979,
      "predicate": "messageActionSetMessagesTTL",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "auto_setting_from",
          "type": "flags.0?long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3013637729,
      "predicate": "messageActionGroupCallScheduled",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "schedule_date",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2860016453,
      "predicate": "messageActionSetChatTheme",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3955008459,
      "predicate": "messageActionChatJoinedByRequest",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 1205698681,
      "predicate": "messageActionWebViewDataSentMe",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3032714421,
      "predicate": "messageActionWebViewDataSent",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1818391802,
      "predicate": "messageActionGiftPremium",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "months",
          "type": "int"
        },
        {
          "name": "crypto_currency",
          "type": "flags.0?string"
        },
        {
          "name": "crypto_amount",
          "type": "flags.0?long"
        },
        {
          "name": "message",
          "type": "flags.1?TextWithEntities"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 228168278,
      "predicate": "messageActionTopicCreate",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "icon_color",
          "type": "int"
        },
        {
          "name": "icon_emoji_id",
          "type": "flags.0?long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3230943264,
      "predicate": "messageActionTopicEdit",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "icon_emoji_id",
          "type": "flags.1?long"
        },
        {
          "name": "closed",
          "type": "flags.2?Bool"
        },
        {
          "name": "hidden",
          "type": "flags.3?Bool"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1474192222,
      "predicate": "messageActionSuggestProfilePhoto",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 827428507,
      "predicate": "messageActionRequestedPeer",
      "params": [
        {
          "name": "button_id",
          "type": "int"
        },
        {
          "name": "peers",
          "type": "Vector<Peer>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1348510708,
      "predicate": "messageActionSetChatWallPaper",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "same",
          "type": "flags.0?true"
        },
        {
          "name": "for_both",
          "type": "flags.1?true"
        },
        {
          "name": "wallpaper",
          "type": "WallPaper"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1456486804,
      "predicate": "messageActionGiftCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "via_giveaway",
          "type": "flags.0?true"
        },
        {
          "name": "unclaimed",
          "type": "flags.2?true"
        },
        {
          "name": "boost_peer",
          "type": "flags.1?Peer"
        },
        {
          "name": "months",
          "type": "int"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "currency",
          "type": "flags.2?string"
        },
        {
          "name": "amount",
          "type": "flags.2?long"
        },
        {
          "name": "crypto_currency",
          "type": "flags.3?string"
        },
        {
          "name": "crypto_amount",
          "type": "flags.3?long"
        },
        {
          "name": "message",
          "type": "flags.4?TextWithEntities"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2819576292,
      "predicate": "messageActionGiveawayLaunch",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stars",
          "type": "flags.0?long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2279797077,
      "predicate": "messageActionGiveawayResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stars",
          "type": "flags.0?true"
        },
        {
          "name": "winners_count",
          "type": "int"
        },
        {
          "name": "unclaimed_count",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3422726765,
      "predicate": "messageActionBoostApply",
      "params": [
        {
          "name": "boosts",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2477987912,
      "predicate": "messageActionRequestedPeerSentMe",
      "params": [
        {
          "name": "button_id",
          "type": "int"
        },
        {
          "name": "peers",
          "type": "Vector<RequestedPeer>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1102307842,
      "predicate": "messageActionPaymentRefunded",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "flags.0?bytes"
        },
        {
          "name": "charge",
          "type": "PaymentCharge"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1171632161,
      "predicate": "messageActionGiftStars",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "crypto_currency",
          "type": "flags.0?string"
        },
        {
          "name": "crypto_amount",
          "type": "flags.0?long"
        },
        {
          "name": "transaction_id",
          "type": "flags.1?string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2953594786,
      "predicate": "messageActionPrizeStars",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unclaimed",
          "type": "flags.0?true"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "transaction_id",
          "type": "string"
        },
        {
          "name": "boost_peer",
          "type": "Peer"
        },
        {
          "name": "giveaway_msg_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1192749220,
      "predicate": "messageActionStarGift",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name_hidden",
          "type": "flags.0?true"
        },
        {
          "name": "saved",
          "type": "flags.2?true"
        },
        {
          "name": "converted",
          "type": "flags.3?true"
        },
        {
          "name": "upgraded",
          "type": "flags.5?true"
        },
        {
          "name": "refunded",
          "type": "flags.9?true"
        },
        {
          "name": "can_upgrade",
          "type": "flags.10?true"
        },
        {
          "name": "gift",
          "type": "StarGift"
        },
        {
          "name": "message",
          "type": "flags.1?TextWithEntities"
        },
        {
          "name": "convert_stars",
          "type": "flags.4?long"
        },
        {
          "name": "upgrade_msg_id",
          "type": "flags.5?int"
        },
        {
          "name": "upgrade_stars",
          "type": "flags.8?long"
        },
        {
          "name": "from_id",
          "type": "flags.11?Peer"
        },
        {
          "name": "peer",
          "type": "flags.12?Peer"
        },
        {
          "name": "saved_id",
          "type": "flags.12?long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2900347777,
      "predicate": "messageActionStarGiftUnique",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "upgrade",
          "type": "flags.0?true"
        },
        {
          "name": "transferred",
          "type": "flags.1?true"
        },
        {
          "name": "saved",
          "type": "flags.2?true"
        },
        {
          "name": "refunded",
          "type": "flags.5?true"
        },
        {
          "name": "gift",
          "type": "StarGift"
        },
        {
          "name": "can_export_at",
          "type": "flags.3?int"
        },
        {
          "name": "transfer_stars",
          "type": "flags.4?long"
        },
        {
          "name": "from_id",
          "type": "flags.6?Peer"
        },
        {
          "name": "peer",
          "type": "flags.7?Peer"
        },
        {
          "name": "saved_id",
          "type": "flags.7?long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3582593222,
      "predicate": "dialog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "unread_mark",
          "type": "flags.3?true"
        },
        {
          "name": "view_forum_as_messages",
          "type": "flags.6?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "unread_mentions_count",
          "type": "int"
        },
        {
          "name": "unread_reactions_count",
          "type": "int"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        },
        {
          "name": "draft",
          "type": "flags.1?DraftMessage"
        },
        {
          "name": "folder_id",
          "type": "flags.4?int"
        },
        {
          "name": "ttl_period",
          "type": "flags.5?int"
        }
      ],
      "type": "Dialog"
    },
    {
      "id": 1908216652,
      "predicate": "dialogFolder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "folder",
          "type": "Folder"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "unread_muted_peers_count",
          "type": "int"
        },
        {
          "name": "unread_unmuted_peers_count",
          "type": "int"
        },
        {
          "name": "unread_muted_messages_count",
          "type": "int"
        },
        {
          "name": "unread_unmuted_messages_count",
          "type": "int"
        }
      ],
      "type": "Dialog"
    },
    {
      "id": 590459437,
      "predicate": "photoEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Photo"
    },
    {
      "id": 4212750949,
      "predicate": "photo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_stickers",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "sizes",
          "type": "Vector<PhotoSize>"
        },
        {
          "name": "video_sizes",
          "type": "flags.1?Vector<VideoSize>"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "Photo"
    },
    {
      "id": 236446268,
      "predicate": "photoSizeEmpty",
      "params": [
        {
          "name": "type",
          "type": "string"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 1976012384,
      "predicate": "photoSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "size",
          "type": "int"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 35527382,
      "predicate": "photoCachedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 3769678894,
      "predicate": "photoStrippedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 4198431637,
      "predicate": "photoSizeProgressive",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "sizes",
          "type": "Vector<int>"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 3626061121,
      "predicate": "photoPathSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 286776671,
      "predicate": "geoPointEmpty",
      "params": [],
      "type": "GeoPoint"
    },
    {
      "id": 2997024355,
      "predicate": "geoPoint",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "long",
          "type": "double"
        },
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "accuracy_radius",
          "type": "flags.0?int"
        }
      ],
      "type": "GeoPoint"
    },
    {
      "id": 1577067778,
      "predicate": "auth.sentCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "auth.SentCodeType"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "next_type",
          "type": "flags.1?auth.CodeType"
        },
        {
          "name": "timeout",
          "type": "flags.2?int"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 596704836,
      "predicate": "auth.sentCodeSuccess",
      "params": [
        {
          "name": "authorization",
          "type": "auth.Authorization"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 782418132,
      "predicate": "auth.authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "setup_password_required",
          "type": "flags.1?true"
        },
        {
          "name": "otherwise_relogin_days",
          "type": "flags.1?int"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "future_auth_token",
          "type": "flags.2?bytes"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 1148485274,
      "predicate": "auth.authorizationSignUpRequired",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "terms_of_service",
          "type": "flags.0?help.TermsOfService"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3023364792,
      "predicate": "auth.exportedAuthorization",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    {
      "id": 3099351820,
      "predicate": "inputNotifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputNotifyPeer"
    },
    {
      "id": 423314455,
      "predicate": "inputNotifyUsers",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": 1251338318,
      "predicate": "inputNotifyChats",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": 2983951486,
      "predicate": "inputNotifyBroadcasts",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": 1548122514,
      "predicate": "inputNotifyForumTopic",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "int"
        }
      ],
      "type": "InputNotifyPeer"
    },
    {
      "id": 3402328802,
      "predicate": "inputPeerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "sound",
          "type": "flags.3?NotificationSound"
        },
        {
          "name": "stories_muted",
          "type": "flags.6?Bool"
        },
        {
          "name": "stories_hide_sender",
          "type": "flags.7?Bool"
        },
        {
          "name": "stories_sound",
          "type": "flags.8?NotificationSound"
        }
      ],
      "type": "InputPeerNotifySettings"
    },
    {
      "id": 2573347852,
      "predicate": "peerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "ios_sound",
          "type": "flags.3?NotificationSound"
        },
        {
          "name": "android_sound",
          "type": "flags.4?NotificationSound"
        },
        {
          "name": "other_sound",
          "type": "flags.5?NotificationSound"
        },
        {
          "name": "stories_muted",
          "type": "flags.6?Bool"
        },
        {
          "name": "stories_hide_sender",
          "type": "flags.7?Bool"
        },
        {
          "name": "stories_ios_sound",
          "type": "flags.8?NotificationSound"
        },
        {
          "name": "stories_android_sound",
          "type": "flags.9?NotificationSound"
        },
        {
          "name": "stories_other_sound",
          "type": "flags.10?NotificationSound"
        }
      ],
      "type": "PeerNotifySettings"
    },
    {
      "id": 2899733598,
      "predicate": "peerSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "report_spam",
          "type": "flags.0?true"
        },
        {
          "name": "add_contact",
          "type": "flags.1?true"
        },
        {
          "name": "block_contact",
          "type": "flags.2?true"
        },
        {
          "name": "share_contact",
          "type": "flags.3?true"
        },
        {
          "name": "need_contacts_exception",
          "type": "flags.4?true"
        },
        {
          "name": "report_geo",
          "type": "flags.5?true"
        },
        {
          "name": "autoarchived",
          "type": "flags.7?true"
        },
        {
          "name": "invite_members",
          "type": "flags.8?true"
        },
        {
          "name": "request_chat_broadcast",
          "type": "flags.10?true"
        },
        {
          "name": "business_bot_paused",
          "type": "flags.11?true"
        },
        {
          "name": "business_bot_can_reply",
          "type": "flags.12?true"
        },
        {
          "name": "geo_distance",
          "type": "flags.6?int"
        },
        {
          "name": "request_chat_title",
          "type": "flags.9?string"
        },
        {
          "name": "request_chat_date",
          "type": "flags.9?int"
        },
        {
          "name": "business_bot_id",
          "type": "flags.13?long"
        },
        {
          "name": "business_bot_manage_url",
          "type": "flags.13?string"
        }
      ],
      "type": "PeerSettings"
    },
    {
      "id": 2755118061,
      "predicate": "wallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "pattern",
          "type": "flags.3?true"
        },
        {
          "name": "dark",
          "type": "flags.4?true"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "document",
          "type": "Document"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 3766501654,
      "predicate": "wallPaperNoFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "dark",
          "type": "flags.4?true"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 1490799288,
      "predicate": "inputReportReasonSpam",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 505595789,
      "predicate": "inputReportReasonViolence",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 777640226,
      "predicate": "inputReportReasonPornography",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 2918469347,
      "predicate": "inputReportReasonChildAbuse",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 3252986545,
      "predicate": "inputReportReasonOther",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 2609510714,
      "predicate": "inputReportReasonCopyright",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 3688169197,
      "predicate": "inputReportReasonGeoIrrelevant",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 4124956391,
      "predicate": "inputReportReasonFake",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 177124030,
      "predicate": "inputReportReasonIllegalDrugs",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 2663876157,
      "predicate": "inputReportReasonPersonalDetails",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 1301765052,
      "predicate": "userFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "phone_calls_available",
          "type": "flags.4?true"
        },
        {
          "name": "phone_calls_private",
          "type": "flags.5?true"
        },
        {
          "name": "can_pin_message",
          "type": "flags.7?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.12?true"
        },
        {
          "name": "video_calls_available",
          "type": "flags.13?true"
        },
        {
          "name": "voice_messages_forbidden",
          "type": "flags.20?true"
        },
        {
          "name": "translations_disabled",
          "type": "flags.23?true"
        },
        {
          "name": "stories_pinned_available",
          "type": "flags.26?true"
        },
        {
          "name": "blocked_my_stories_from",
          "type": "flags.27?true"
        },
        {
          "name": "wallpaper_overridden",
          "type": "flags.28?true"
        },
        {
          "name": "contact_require_premium",
          "type": "flags.29?true"
        },
        {
          "name": "read_dates_private",
          "type": "flags.30?true"
        },
        {
          "name": "flags2",
          "type": "#"
        },
        {
          "name": "sponsored_enabled",
          "type": "flags2.7?true"
        },
        {
          "name": "can_view_revenue",
          "type": "flags2.9?true"
        },
        {
          "name": "bot_can_manage_emoji_status",
          "type": "flags2.10?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "about",
          "type": "flags.1?string"
        },
        {
          "name": "settings",
          "type": "PeerSettings"
        },
        {
          "name": "personal_photo",
          "type": "flags.21?Photo"
        },
        {
          "name": "profile_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "fallback_photo",
          "type": "flags.22?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "bot_info",
          "type": "flags.3?BotInfo"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        },
        {
          "name": "common_chats_count",
          "type": "int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        },
        {
          "name": "ttl_period",
          "type": "flags.14?int"
        },
        {
          "name": "theme_emoticon",
          "type": "flags.15?string"
        },
        {
          "name": "private_forward_name",
          "type": "flags.16?string"
        },
        {
          "name": "bot_group_admin_rights",
          "type": "flags.17?ChatAdminRights"
        },
        {
          "name": "bot_broadcast_admin_rights",
          "type": "flags.18?ChatAdminRights"
        },
        {
          "name": "premium_gifts",
          "type": "flags.19?Vector<PremiumGiftOption>"
        },
        {
          "name": "wallpaper",
          "type": "flags.24?WallPaper"
        },
        {
          "name": "stories",
          "type": "flags.25?PeerStories"
        },
        {
          "name": "business_work_hours",
          "type": "flags2.0?BusinessWorkHours"
        },
        {
          "name": "business_location",
          "type": "flags2.1?BusinessLocation"
        },
        {
          "name": "business_greeting_message",
          "type": "flags2.2?BusinessGreetingMessage"
        },
        {
          "name": "business_away_message",
          "type": "flags2.3?BusinessAwayMessage"
        },
        {
          "name": "business_intro",
          "type": "flags2.4?BusinessIntro"
        },
        {
          "name": "birthday",
          "type": "flags2.5?Birthday"
        },
        {
          "name": "personal_channel_id",
          "type": "flags2.6?long"
        },
        {
          "name": "personal_channel_message",
          "type": "flags2.6?int"
        },
        {
          "name": "stargifts_count",
          "type": "flags2.8?int"
        },
        {
          "name": "starref_program",
          "type": "flags2.11?StarRefProgram"
        },
        {
          "name": "bot_verification",
          "type": "flags2.12?BotVerification"
        }
      ],
      "type": "UserFull"
    },
    {
      "id": 341499403,
      "predicate": "contact",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "mutual",
          "type": "Bool"
        }
      ],
      "type": "Contact"
    },
    {
      "id": 3242081360,
      "predicate": "importedContact",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "client_id",
          "type": "long"
        }
      ],
      "type": "ImportedContact"
    },
    {
      "id": 383348795,
      "predicate": "contactStatus",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "ContactStatus"
    },
    {
      "id": 3075189202,
      "predicate": "contacts.contactsNotModified",
      "params": [],
      "type": "contacts.Contacts"
    },
    {
      "id": 3941105218,
      "predicate": "contacts.contacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector<Contact>"
        },
        {
          "name": "saved_count",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Contacts"
    },
    {
      "id": 2010127419,
      "predicate": "contacts.importedContacts",
      "params": [
        {
          "name": "imported",
          "type": "Vector<ImportedContact>"
        },
        {
          "name": "popular_invites",
          "type": "Vector<PopularContact>"
        },
        {
          "name": "retry_contacts",
          "type": "Vector<long>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    {
      "id": 182326673,
      "predicate": "contacts.blocked",
      "params": [
        {
          "name": "blocked",
          "type": "Vector<PeerBlocked>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": 3781575060,
      "predicate": "contacts.blockedSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "blocked",
          "type": "Vector<PeerBlocked>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": 364538944,
      "predicate": "messages.dialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 1910543603,
      "predicate": "messages.dialogsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 4041467286,
      "predicate": "messages.dialogsNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 2356252295,
      "predicate": "messages.messages",
      "params": [
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 978610270,
      "predicate": "messages.messagesSlice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "next_rate",
          "type": "flags.0?int"
        },
        {
          "name": "offset_id_offset",
          "type": "flags.2?int"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 3346446926,
      "predicate": "messages.channelMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "offset_id_offset",
          "type": "flags.2?int"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "topics",
          "type": "Vector<ForumTopic>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1951620897,
      "predicate": "messages.messagesNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1694474197,
      "predicate": "messages.chats",
      "params": [
        {
          "name": "chats",
          "type": "Vector<Chat>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 2631405892,
      "predicate": "messages.chatsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 3856126364,
      "predicate": "messages.chatFull",
      "params": [
        {
          "name": "full_chat",
          "type": "ChatFull"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": 3025955281,
      "predicate": "messages.affectedHistory",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 1474492012,
      "predicate": "inputMessagesFilterEmpty",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2517214492,
      "predicate": "inputMessagesFilterPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2680163941,
      "predicate": "inputMessagesFilterVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 1458172132,
      "predicate": "inputMessagesFilterPhotoVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2665345416,
      "predicate": "inputMessagesFilterDocument",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2129714567,
      "predicate": "inputMessagesFilterUrl",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 4291323271,
      "predicate": "inputMessagesFilterGif",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 1358283666,
      "predicate": "inputMessagesFilterVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 928101534,
      "predicate": "inputMessagesFilterMusic",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 975236280,
      "predicate": "inputMessagesFilterChatPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2160695144,
      "predicate": "inputMessagesFilterPhoneCalls",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "missed",
          "type": "flags.0?true"
        }
      ],
      "type": "MessagesFilter"
    },
    {
      "id": 2054952868,
      "predicate": "inputMessagesFilterRoundVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3041516115,
      "predicate": "inputMessagesFilterRoundVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3254314650,
      "predicate": "inputMessagesFilterMyMentions",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3875695885,
      "predicate": "inputMessagesFilterGeo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3764575107,
      "predicate": "inputMessagesFilterContacts",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 464520273,
      "predicate": "inputMessagesFilterPinned",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 522914557,
      "predicate": "updateNewMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1318109142,
      "predicate": "updateMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2718806245,
      "predicate": "updateDeleteMessages",
      "params": [
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3223225727,
      "predicate": "updateUserTyping",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2202565360,
      "predicate": "updateChatUserTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "from_id",
          "type": "Peer"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 125178264,
      "predicate": "updateChatParticipants",
      "params": [
        {
          "name": "participants",
          "type": "ChatParticipants"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3854432478,
      "predicate": "updateUserStatus",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2810480932,
      "predicate": "updateUserName",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "usernames",
          "type": "Vector<Username>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2303831023,
      "predicate": "updateNewAuthorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unconfirmed",
          "type": "flags.0?true"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "flags.0?int"
        },
        {
          "name": "device",
          "type": "flags.0?string"
        },
        {
          "name": "location",
          "type": "flags.0?string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 314359194,
      "predicate": "updateNewEncryptedMessage",
      "params": [
        {
          "name": "message",
          "type": "EncryptedMessage"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 386986326,
      "predicate": "updateEncryptedChatTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3030575245,
      "predicate": "updateEncryption",
      "params": [
        {
          "name": "chat",
          "type": "EncryptedChat"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 956179895,
      "predicate": "updateEncryptedMessagesRead",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1037718609,
      "predicate": "updateChatParticipantAdd",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "inviter_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3811523959,
      "predicate": "updateChatParticipantDelete",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2388564083,
      "predicate": "updateDcOptions",
      "params": [
        {
          "name": "dc_options",
          "type": "Vector<DcOption>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3200411887,
      "predicate": "updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "NotifyPeer"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3957614617,
      "predicate": "updateServiceNotification",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "invert_media",
          "type": "flags.2?true"
        },
        {
          "name": "inbox_date",
          "type": "flags.1?int"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "MessageMedia"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3996854058,
      "predicate": "updatePrivacy",
      "params": [
        {
          "name": "key",
          "type": "PrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector<PrivacyRule>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 88680979,
      "predicate": "updateUserPhone",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2627162079,
      "predicate": "updateReadHistoryInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "still_unread_count",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 791617983,
      "predicate": "updateReadHistoryOutbox",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2139689491,
      "predicate": "updateWebPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4163006849,
      "predicate": "updateReadMessagesContents",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 277713951,
      "predicate": "updateChannelTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1666927625,
      "predicate": "updateChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1656358105,
      "predicate": "updateNewChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2452516368,
      "predicate": "updateReadChannelInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "still_unread_count",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3274529554,
      "predicate": "updateDeleteChannelMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4062620680,
      "predicate": "updateChannelMessageViews",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3620364706,
      "predicate": "updateChatParticipantAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1753886890,
      "predicate": "updateNewStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "messages.StickerSet"
        }
      ],
      "type": "Update"
    },
    {
      "id": 196268545,
      "predicate": "updateStickerSetsOrder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "emojis",
          "type": "flags.1?true"
        },
        {
          "name": "order",
          "type": "Vector<long>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 834816008,
      "predicate": "updateStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "emojis",
          "type": "flags.1?true"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2473931806,
      "predicate": "updateSavedGifs",
      "params": [],
      "type": "Update"
    },
    {
      "id": 1232025500,
      "predicate": "updateBotInlineQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "peer_type",
          "type": "flags.1?InlineQueryPeerType"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 317794823,
      "predicate": "updateBotInlineSend",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "msg_id",
          "type": "flags.1?InputBotInlineMessageID"
        }
      ],
      "type": "Update"
    },
    {
      "id": 457133559,
      "predicate": "updateEditChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3117401229,
      "predicate": "updateBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3825430691,
      "predicate": "updateEditMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1763610706,
      "predicate": "updateInlineBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "msg_id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3076495785,
      "predicate": "updateReadChannelOutbox",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 457829485,
      "predicate": "updateDraftMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "draft",
          "type": "DraftMessage"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1461528386,
      "predicate": "updateReadFeaturedStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2588027936,
      "predicate": "updateRecentStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2720652550,
      "predicate": "updateConfig",
      "params": [],
      "type": "Update"
    },
    {
      "id": 861169551,
      "predicate": "updatePtsChanged",
      "params": [],
      "type": "Update"
    },
    {
      "id": 791390623,
      "predicate": "updateChannelWebPage",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1852826908,
      "predicate": "updateDialogPinned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4195302562,
      "predicate": "updatePinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "order",
          "type": "flags.0?Vector<DialogPeer>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2199371971,
      "predicate": "updateBotWebhookJSON",
      "params": [
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2610053286,
      "predicate": "updateBotWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        },
        {
          "name": "timeout",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3048144253,
      "predicate": "updateBotShippingQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "shipping_address",
          "type": "PostAddress"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2359990934,
      "predicate": "updateBotPrecheckoutQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2869914398,
      "predicate": "updatePhoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1180041828,
      "predicate": "updateLangPackTooLong",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1442983757,
      "predicate": "updateLangPack",
      "params": [
        {
          "name": "difference",
          "type": "LangPackDifference"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3843135853,
      "predicate": "updateFavedStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": 3928556893,
      "predicate": "updateChannelReadMessagesContents",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1887741886,
      "predicate": "updateContactsReset",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2990524056,
      "predicate": "updateChannelAvailableMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "available_min_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3781450179,
      "predicate": "updateDialogUnreadMark",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2896258427,
      "predicate": "updateMessagePoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "poll_id",
          "type": "long"
        },
        {
          "name": "poll",
          "type": "flags.0?Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1421875280,
      "predicate": "updateChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "default_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 422972864,
      "predicate": "updateFolderPeers",
      "params": [
        {
          "name": "folder_peers",
          "type": "Vector<FolderPeer>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1786671974,
      "predicate": "updatePeerSettings",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "settings",
          "type": "PeerSettings"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3031420848,
      "predicate": "updatePeerLocated",
      "params": [
        {
          "name": "peers",
          "type": "Vector<PeerLocated>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 967122427,
      "predicate": "updateNewScheduledMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4071037315,
      "predicate": "updateDeleteScheduledMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "sent_messages",
          "type": "flags.0?Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2182544291,
      "predicate": "updateTheme",
      "params": [
        {
          "name": "theme",
          "type": "Theme"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2267003193,
      "predicate": "updateGeoLiveViewed",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1448076945,
      "predicate": "updateLoginToken",
      "params": [],
      "type": "Update"
    },
    {
      "id": 619974263,
      "predicate": "updateMessagePollVote",
      "params": [
        {
          "name": "poll_id",
          "type": "long"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 654302845,
      "predicate": "updateDialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "filter",
          "type": "flags.0?DialogFilter"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2782339333,
      "predicate": "updateDialogFilterOrder",
      "params": [
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 889491791,
      "predicate": "updateDialogFilters",
      "params": [],
      "type": "Update"
    },
    {
      "id": 643940105,
      "predicate": "updatePhoneCallSignalingData",
      "params": [
        {
          "name": "phone_call_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3533318132,
      "predicate": "updateChannelMessageForwards",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "forwards",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3601962310,
      "predicate": "updateReadChannelDiscussionInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "top_msg_id",
          "type": "int"
        },
        {
          "name": "read_max_id",
          "type": "int"
        },
        {
          "name": "broadcast_id",
          "type": "flags.0?long"
        },
        {
          "name": "broadcast_post",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1767677564,
      "predicate": "updateReadChannelDiscussionOutbox",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "top_msg_id",
          "type": "int"
        },
        {
          "name": "read_max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3957356370,
      "predicate": "updatePeerBlocked",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "blocked_my_stories_from",
          "type": "flags.1?true"
        },
        {
          "name": "peer_id",
          "type": "Peer"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2357774627,
      "predicate": "updateChannelUserTyping",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "from_id",
          "type": "Peer"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3984976565,
      "predicate": "updatePinnedMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1538885128,
      "predicate": "updatePinnedChannelMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4170869326,
      "predicate": "updateChat",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4075543374,
      "predicate": "updateGroupCallParticipants",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "participants",
          "type": "Vector<GroupCallParticipant>"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2547401537,
      "predicate": "updateGroupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "flags.0?long"
        },
        {
          "name": "call",
          "type": "GroupCall"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3147544997,
      "predicate": "updatePeerHistoryTTL",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "ttl_period",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3498534458,
      "predicate": "updateChatParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "actor_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "prev_participant",
          "type": "flags.0?ChatParticipant"
        },
        {
          "name": "new_participant",
          "type": "flags.1?ChatParticipant"
        },
        {
          "name": "invite",
          "type": "flags.2?ExportedChatInvite"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2556246715,
      "predicate": "updateChannelParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "via_chatlist",
          "type": "flags.3?true"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "actor_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "prev_participant",
          "type": "flags.0?ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "flags.1?ChannelParticipant"
        },
        {
          "name": "invite",
          "type": "flags.2?ExportedChatInvite"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3297184329,
      "predicate": "updateBotStopped",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "stopped",
          "type": "Bool"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 192428418,
      "predicate": "updateGroupCallConnection",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "presentation",
          "type": "flags.0?true"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1299263278,
      "predicate": "updateBotCommands",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "commands",
          "type": "Vector<BotCommand>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1885586395,
      "predicate": "updatePendingJoinRequests",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "requests_pending",
          "type": "int"
        },
        {
          "name": "recent_requesters",
          "type": "Vector<long>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 299870598,
      "predicate": "updateBotChatInviteRequester",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1578843320,
      "predicate": "updateMessageReactions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "reactions",
          "type": "MessageReactions"
        }
      ],
      "type": "Update"
    },
    {
      "id": 397910539,
      "predicate": "updateAttachMenuBots",
      "params": [],
      "type": "Update"
    },
    {
      "id": 361936797,
      "predicate": "updateWebViewResultSent",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 347625491,
      "predicate": "updateBotMenuButton",
      "params": [
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "button",
          "type": "BotMenuButton"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1960361625,
      "predicate": "updateSavedRingtones",
      "params": [],
      "type": "Update"
    },
    {
      "id": 8703322,
      "predicate": "updateTranscribedAudio",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pending",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "transcription_id",
          "type": "long"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4216080748,
      "predicate": "updateReadFeaturedEmojiStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": 674706841,
      "predicate": "updateUserEmojiStatus",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "emoji_status",
          "type": "EmojiStatus"
        }
      ],
      "type": "Update"
    },
    {
      "id": 821314523,
      "predicate": "updateRecentEmojiStatuses",
      "params": [],
      "type": "Update"
    },
    {
      "id": 1870160884,
      "predicate": "updateRecentReactions",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2264715141,
      "predicate": "updateMoveStickerSetToTop",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "emojis",
          "type": "flags.1?true"
        },
        {
          "name": "stickerset",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3584300836,
      "predicate": "updateMessageExtendedMedia",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "extended_media",
          "type": "Vector<MessageExtendedMedia>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 422509539,
      "predicate": "updateChannelPinnedTopic",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "topic_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4263085570,
      "predicate": "updateChannelPinnedTopics",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "order",
          "type": "flags.0?Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 542282808,
      "predicate": "updateUser",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3959795863,
      "predicate": "updateAutoSaveSettings",
      "params": [],
      "type": "Update"
    },
    {
      "id": 1974712216,
      "predicate": "updateStory",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "story",
          "type": "StoryItem"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4149121835,
      "predicate": "updateReadStories",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 468923833,
      "predicate": "updateStoryID",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 738741697,
      "predicate": "updateStoriesStealthMode",
      "params": [
        {
          "name": "stealth_mode",
          "type": "StoriesStealthMode"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2103604867,
      "predicate": "updateSentStoryReaction",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "story_id",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2421019804,
      "predicate": "updateBotChatBoost",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "boost",
          "type": "Boost"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 129403168,
      "predicate": "updateChannelViewForumAsMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2923368477,
      "predicate": "updatePeerWallpaper",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "wallpaper_overridden",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "wallpaper",
          "type": "flags.0?WallPaper"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2887898062,
      "predicate": "updateBotMessageReaction",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "actor",
          "type": "Peer"
        },
        {
          "name": "old_reactions",
          "type": "Vector<Reaction>"
        },
        {
          "name": "new_reactions",
          "type": "Vector<Reaction>"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 164329305,
      "predicate": "updateBotMessageReactions",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "reactions",
          "type": "Vector<ReactionCount>"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2930744948,
      "predicate": "updateSavedDialogPinned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1751942566,
      "predicate": "updatePinnedSavedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "order",
          "type": "flags.0?Vector<DialogPeer>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 969307186,
      "predicate": "updateSavedReactionTags",
      "params": [],
      "type": "Update"
    },
    {
      "id": 4049758676,
      "predicate": "updateSmsJob",
      "params": [
        {
          "name": "job_id",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4182182578,
      "predicate": "updateQuickReplies",
      "params": [
        {
          "name": "quick_replies",
          "type": "Vector<QuickReply>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4114458391,
      "predicate": "updateNewQuickReply",
      "params": [
        {
          "name": "quick_reply",
          "type": "QuickReply"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1407644140,
      "predicate": "updateDeleteQuickReply",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1040518415,
      "predicate": "updateQuickReplyMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1450174413,
      "predicate": "updateDeleteQuickReplyMessages",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2330315130,
      "predicate": "updateBotBusinessConnect",
      "params": [
        {
          "name": "connection",
          "type": "BotBusinessConnection"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2648388732,
      "predicate": "updateBotNewBusinessMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "connection_id",
          "type": "string"
        },
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "reply_to_message",
          "type": "flags.0?Message"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 132077692,
      "predicate": "updateBotEditBusinessMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "connection_id",
          "type": "string"
        },
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "reply_to_message",
          "type": "flags.0?Message"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2687146030,
      "predicate": "updateBotDeleteBusinessMessage",
      "params": [
        {
          "name": "connection_id",
          "type": "string"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 405070859,
      "predicate": "updateNewStoryReaction",
      "params": [
        {
          "name": "story_id",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3755565557,
      "predicate": "updateBroadcastRevenueTransactions",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "balances",
          "type": "BroadcastRevenueBalances"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1317053305,
      "predicate": "updateStarsBalance",
      "params": [
        {
          "name": "balance",
          "type": "StarsAmount"
        }
      ],
      "type": "Update"
    },
    {
      "id": 513998247,
      "predicate": "updateBusinessBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "connection_id",
          "type": "string"
        },
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "reply_to_message",
          "type": "flags.2?Message"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2776936473,
      "predicate": "updateStarsRevenueStatus",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "status",
          "type": "StarsRevenueStatus"
        }
      ],
      "type": "Update"
    },
    {
      "id": 675009298,
      "predicate": "updateBotPurchasedPaidMedia",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "string"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2339528654,
      "predicate": "updatePaidReactionPrivacy",
      "params": [
        {
          "name": "private",
          "type": "PaidReactionPrivacy"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2775329342,
      "predicate": "updates.state",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        }
      ],
      "type": "updates.State"
    },
    {
      "id": 1567990072,
      "predicate": "updates.differenceEmpty",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 16030880,
      "predicate": "updates.difference",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector<EncryptedMessage>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 2835028353,
      "predicate": "updates.differenceSlice",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector<EncryptedMessage>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "intermediate_state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 1258196845,
      "predicate": "updates.differenceTooLong",
      "params": [
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 3809980286,
      "predicate": "updatesTooLong",
      "params": [],
      "type": "Updates"
    },
    {
      "id": 826001400,
      "predicate": "updateShortMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?long"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1299050149,
      "predicate": "updateShortChatMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?long"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2027216577,
      "predicate": "updateShort",
      "params": [
        {
          "name": "update",
          "type": "Update"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1918567619,
      "predicate": "updatesCombined",
      "params": [
        {
          "name": "updates",
          "type": "Vector<Update>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq_start",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1957577280,
      "predicate": "updates",
      "params": [
        {
          "name": "updates",
          "type": "Vector<Update>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2417352961,
      "predicate": "updateShortSentMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2378853029,
      "predicate": "photos.photos",
      "params": [
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": 352657236,
      "predicate": "photos.photosSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": 539045032,
      "predicate": "photos.photo",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": 157948117,
      "predicate": "upload.file",
      "params": [
        {
          "name": "type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": 4052539972,
      "predicate": "upload.fileCdnRedirect",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "encryption_key",
          "type": "bytes"
        },
        {
          "name": "encryption_iv",
          "type": "bytes"
        },
        {
          "name": "file_hashes",
          "type": "Vector<FileHash>"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": 414687501,
      "predicate": "dcOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "ipv6",
          "type": "flags.0?true"
        },
        {
          "name": "media_only",
          "type": "flags.1?true"
        },
        {
          "name": "tcpo_only",
          "type": "flags.2?true"
        },
        {
          "name": "cdn",
          "type": "flags.3?true"
        },
        {
          "name": "static",
          "type": "flags.4?true"
        },
        {
          "name": "this_port_only",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "ip_address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "flags.10?bytes"
        }
      ],
      "type": "DcOption"
    },
    {
      "id": 3424265246,
      "predicate": "config",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "default_p2p_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "preload_featured_stickers",
          "type": "flags.4?true"
        },
        {
          "name": "revoke_pm_inbox",
          "type": "flags.6?true"
        },
        {
          "name": "blocked_mode",
          "type": "flags.8?true"
        },
        {
          "name": "force_try_ipv6",
          "type": "flags.14?true"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "test_mode",
          "type": "Bool"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "dc_options",
          "type": "Vector<DcOption>"
        },
        {
          "name": "dc_txt_domain_name",
          "type": "string"
        },
        {
          "name": "chat_size_max",
          "type": "int"
        },
        {
          "name": "megagroup_size_max",
          "type": "int"
        },
        {
          "name": "forwarded_count_max",
          "type": "int"
        },
        {
          "name": "online_update_period_ms",
          "type": "int"
        },
        {
          "name": "offline_blur_timeout_ms",
          "type": "int"
        },
        {
          "name": "offline_idle_timeout_ms",
          "type": "int"
        },
        {
          "name": "online_cloud_timeout_ms",
          "type": "int"
        },
        {
          "name": "notify_cloud_delay_ms",
          "type": "int"
        },
        {
          "name": "notify_default_delay_ms",
          "type": "int"
        },
        {
          "name": "push_chat_period_ms",
          "type": "int"
        },
        {
          "name": "push_chat_limit",
          "type": "int"
        },
        {
          "name": "edit_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_pm_time_limit",
          "type": "int"
        },
        {
          "name": "rating_e_decay",
          "type": "int"
        },
        {
          "name": "stickers_recent_limit",
          "type": "int"
        },
        {
          "name": "channels_read_media_period",
          "type": "int"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "call_receive_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_ring_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_connect_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_packet_timeout_ms",
          "type": "int"
        },
        {
          "name": "me_url_prefix",
          "type": "string"
        },
        {
          "name": "autoupdate_url_prefix",
          "type": "flags.7?string"
        },
        {
          "name": "gif_search_username",
          "type": "flags.9?string"
        },
        {
          "name": "venue_search_username",
          "type": "flags.10?string"
        },
        {
          "name": "img_search_username",
          "type": "flags.11?string"
        },
        {
          "name": "static_maps_provider",
          "type": "flags.12?string"
        },
        {
          "name": "caption_length_max",
          "type": "int"
        },
        {
          "name": "message_length_max",
          "type": "int"
        },
        {
          "name": "webfile_dc_id",
          "type": "int"
        },
        {
          "name": "suggested_lang_code",
          "type": "flags.2?string"
        },
        {
          "name": "lang_pack_version",
          "type": "flags.2?int"
        },
        {
          "name": "base_lang_pack_version",
          "type": "flags.2?int"
        },
        {
          "name": "reactions_default",
          "type": "flags.15?Reaction"
        },
        {
          "name": "autologin_token",
          "type": "flags.16?string"
        }
      ],
      "type": "Config"
    },
    {
      "id": 2384074613,
      "predicate": "nearestDc",
      "params": [
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "nearest_dc",
          "type": "int"
        }
      ],
      "type": "NearestDc"
    },
    {
      "id": 3434860080,
      "predicate": "help.appUpdate",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_not_skip",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "sticker",
          "type": "flags.3?Document"
        }
      ],
      "type": "help.AppUpdate"
    },
    {
      "id": 3294258486,
      "predicate": "help.noAppUpdate",
      "params": [],
      "type": "help.AppUpdate"
    },
    {
      "id": 415997816,
      "predicate": "help.inviteText",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "help.InviteText"
    },
    {
      "id": 2877210784,
      "predicate": "encryptedChatEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 1722964307,
      "predicate": "encryptedChatWaiting",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "participant_id",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 1223809356,
      "predicate": "encryptedChatRequested",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "participant_id",
          "type": "long"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 1643173063,
      "predicate": "encryptedChat",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "participant_id",
          "type": "long"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 505183301,
      "predicate": "encryptedChatDiscarded",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "history_deleted",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 4047615457,
      "predicate": "inputEncryptedChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedChat"
    },
    {
      "id": 3256830334,
      "predicate": "encryptedFileEmpty",
      "params": [],
      "type": "EncryptedFile"
    },
    {
      "id": 2818608344,
      "predicate": "encryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "long"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "EncryptedFile"
    },
    {
      "id": 406307684,
      "predicate": "inputEncryptedFileEmpty",
      "params": [],
      "type": "InputEncryptedFile"
    },
    {
      "id": 1690108678,
      "predicate": "inputEncryptedFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": 1511503333,
      "predicate": "inputEncryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": 767652808,
      "predicate": "inputEncryptedFileBigUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": 3977822488,
      "predicate": "encryptedMessage",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "EncryptedMessage"
    },
    {
      "id": 594758406,
      "predicate": "encryptedMessageService",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "EncryptedMessage"
    },
    {
      "id": 3236054581,
      "predicate": "messages.dhConfigNotModified",
      "params": [
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": 740433629,
      "predicate": "messages.dhConfig",
      "params": [
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": 1443858741,
      "predicate": "messages.sentEncryptedMessage",
      "params": [
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 2492727090,
      "predicate": "messages.sentEncryptedFile",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 1928391342,
      "predicate": "inputDocumentEmpty",
      "params": [],
      "type": "InputDocument"
    },
    {
      "id": 448771445,
      "predicate": "inputDocument",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputDocument"
    },
    {
      "id": 922273905,
      "predicate": "documentEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Document"
    },
    {
      "id": 2413085912,
      "predicate": "document",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "size",
          "type": "long"
        },
        {
          "name": "thumbs",
          "type": "flags.0?Vector<PhotoSize>"
        },
        {
          "name": "video_thumbs",
          "type": "flags.1?Vector<VideoSize>"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "Document"
    },
    {
      "id": 398898678,
      "predicate": "help.support",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "help.Support"
    },
    {
      "id": 2681474008,
      "predicate": "notifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "NotifyPeer"
    },
    {
      "id": 3033021260,
      "predicate": "notifyUsers",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": 3221737155,
      "predicate": "notifyChats",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": 3591563503,
      "predicate": "notifyBroadcasts",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": 577659656,
      "predicate": "notifyForumTopic",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_msg_id",
          "type": "int"
        }
      ],
      "type": "NotifyPeer"
    },
    {
      "id": 381645902,
      "predicate": "sendMessageTypingAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 4250847477,
      "predicate": "sendMessageCancelAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 2710034031,
      "predicate": "sendMessageRecordVideoAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 3916839660,
      "predicate": "sendMessageUploadVideoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3576656887,
      "predicate": "sendMessageRecordAudioAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 4082227115,
      "predicate": "sendMessageUploadAudioAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3520285222,
      "predicate": "sendMessageUploadPhotoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 2852968932,
      "predicate": "sendMessageUploadDocumentAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 393186209,
      "predicate": "sendMessageGeoLocationAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 1653390447,
      "predicate": "sendMessageChooseContactAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 3714748232,
      "predicate": "sendMessageGamePlayAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 2297593788,
      "predicate": "sendMessageRecordRoundAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 608050278,
      "predicate": "sendMessageUploadRoundAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3643548293,
      "predicate": "speakingInGroupCallAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 3688534598,
      "predicate": "sendMessageHistoryImportAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 2958739121,
      "predicate": "sendMessageChooseStickerAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 630664139,
      "predicate": "sendMessageEmojiInteraction",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "interaction",
          "type": "DataJSON"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3060109358,
      "predicate": "sendMessageEmojiInteractionSeen",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3004386717,
      "predicate": "contacts.found",
      "params": [
        {
          "name": "my_results",
          "type": "Vector<Peer>"
        },
        {
          "name": "results",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Found"
    },
    {
      "id": 1335282456,
      "predicate": "inputPrivacyKeyStatusTimestamp",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3187344422,
      "predicate": "inputPrivacyKeyChatInvite",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 4206550111,
      "predicate": "inputPrivacyKeyPhoneCall",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3684593874,
      "predicate": "inputPrivacyKeyPhoneP2P",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 2765966344,
      "predicate": "inputPrivacyKeyForwards",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 1461304012,
      "predicate": "inputPrivacyKeyProfilePhoto",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 55761658,
      "predicate": "inputPrivacyKeyPhoneNumber",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3508640733,
      "predicate": "inputPrivacyKeyAddedByPhone",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 2934349160,
      "predicate": "inputPrivacyKeyVoiceMessages",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 941870144,
      "predicate": "inputPrivacyKeyAbout",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3596227020,
      "predicate": "inputPrivacyKeyBirthday",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3782419265,
      "predicate": "inputPrivacyKeyStarGiftsAutoSave",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3157175088,
      "predicate": "privacyKeyStatusTimestamp",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1343122938,
      "predicate": "privacyKeyChatInvite",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1030105979,
      "predicate": "privacyKeyPhoneCall",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 961092808,
      "predicate": "privacyKeyPhoneP2P",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1777096355,
      "predicate": "privacyKeyForwards",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 2517966829,
      "predicate": "privacyKeyProfilePhoto",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 3516589165,
      "predicate": "privacyKeyPhoneNumber",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1124062251,
      "predicate": "privacyKeyAddedByPhone",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 110621716,
      "predicate": "privacyKeyVoiceMessages",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 2760292193,
      "predicate": "privacyKeyAbout",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 536913176,
      "predicate": "privacyKeyBirthday",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 749010424,
      "predicate": "privacyKeyStarGiftsAutoSave",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 218751099,
      "predicate": "inputPrivacyValueAllowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 407582158,
      "predicate": "inputPrivacyValueAllowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 320652927,
      "predicate": "inputPrivacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 195371015,
      "predicate": "inputPrivacyValueDisallowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 3597362889,
      "predicate": "inputPrivacyValueDisallowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 2417034343,
      "predicate": "inputPrivacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 2215004623,
      "predicate": "inputPrivacyValueAllowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<long>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 3914272646,
      "predicate": "inputPrivacyValueDisallowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<long>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 793067081,
      "predicate": "inputPrivacyValueAllowCloseFriends",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 2009975281,
      "predicate": "inputPrivacyValueAllowPremium",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 1515179237,
      "predicate": "inputPrivacyValueAllowBots",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 3303373077,
      "predicate": "inputPrivacyValueDisallowBots",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 4294843308,
      "predicate": "privacyValueAllowContacts",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 1698855810,
      "predicate": "privacyValueAllowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 3096469426,
      "predicate": "privacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<long>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 4169726490,
      "predicate": "privacyValueDisallowContacts",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 2339628899,
      "predicate": "privacyValueDisallowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 3831632193,
      "predicate": "privacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<long>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 1796427406,
      "predicate": "privacyValueAllowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<long>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 1103656293,
      "predicate": "privacyValueDisallowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<long>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 4159232155,
      "predicate": "privacyValueAllowCloseFriends",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 3974725963,
      "predicate": "privacyValueAllowPremium",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 558242653,
      "predicate": "privacyValueAllowBots",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 4138072111,
      "predicate": "privacyValueDisallowBots",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 1352683077,
      "predicate": "account.privacyRules",
      "params": [
        {
          "name": "rules",
          "type": "Vector<PrivacyRule>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": 3100684255,
      "predicate": "accountDaysTTL",
      "params": [
        {
          "name": "days",
          "type": "int"
        }
      ],
      "type": "AccountDaysTTL"
    },
    {
      "id": 1815593308,
      "predicate": "documentAttributeImageSize",
      "params": [
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 297109817,
      "predicate": "documentAttributeAnimated",
      "params": [],
      "type": "DocumentAttribute"
    },
    {
      "id": 1662637586,
      "predicate": "documentAttributeSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "mask",
          "type": "flags.1?true"
        },
        {
          "name": "alt",
          "type": "string"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 1137015880,
      "predicate": "documentAttributeVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "round_message",
          "type": "flags.0?true"
        },
        {
          "name": "supports_streaming",
          "type": "flags.1?true"
        },
        {
          "name": "nosound",
          "type": "flags.3?true"
        },
        {
          "name": "duration",
          "type": "double"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "preload_prefix_size",
          "type": "flags.2?int"
        },
        {
          "name": "video_start_ts",
          "type": "flags.4?double"
        },
        {
          "name": "video_codec",
          "type": "flags.5?string"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 2555574726,
      "predicate": "documentAttributeAudio",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "voice",
          "type": "flags.10?true"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "performer",
          "type": "flags.1?string"
        },
        {
          "name": "waveform",
          "type": "flags.2?bytes"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 358154344,
      "predicate": "documentAttributeFilename",
      "params": [
        {
          "name": "file_name",
          "type": "string"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 2550256375,
      "predicate": "documentAttributeHasStickers",
      "params": [],
      "type": "DocumentAttribute"
    },
    {
      "id": 4245985433,
      "predicate": "documentAttributeCustomEmoji",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "free",
          "type": "flags.0?true"
        },
        {
          "name": "text_color",
          "type": "flags.1?true"
        },
        {
          "name": "alt",
          "type": "string"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 4050950690,
      "predicate": "messages.stickersNotModified",
      "params": [],
      "type": "messages.Stickers"
    },
    {
      "id": 816245886,
      "predicate": "messages.stickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.Stickers"
    },
    {
      "id": 313694676,
      "predicate": "stickerPack",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "documents",
          "type": "Vector<long>"
        }
      ],
      "type": "StickerPack"
    },
    {
      "id": 3898999491,
      "predicate": "messages.allStickersNotModified",
      "params": [],
      "type": "messages.AllStickers"
    },
    {
      "id": 3451637435,
      "predicate": "messages.allStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSet>"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": 2228326789,
      "predicate": "messages.affectedMessages",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 555358088,
      "predicate": "webPageEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "url",
          "type": "flags.0?string"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 2966502983,
      "predicate": "webPagePending",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "url",
          "type": "flags.0?string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 3902555570,
      "predicate": "webPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_large_media",
          "type": "flags.13?true"
        },
        {
          "name": "video_cover_photo",
          "type": "flags.14?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "display_url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "type",
          "type": "flags.0?string"
        },
        {
          "name": "site_name",
          "type": "flags.1?string"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "photo",
          "type": "flags.4?Photo"
        },
        {
          "name": "embed_url",
          "type": "flags.5?string"
        },
        {
          "name": "embed_type",
          "type": "flags.5?string"
        },
        {
          "name": "embed_width",
          "type": "flags.6?int"
        },
        {
          "name": "embed_height",
          "type": "flags.6?int"
        },
        {
          "name": "duration",
          "type": "flags.7?int"
        },
        {
          "name": "author",
          "type": "flags.8?string"
        },
        {
          "name": "document",
          "type": "flags.9?Document"
        },
        {
          "name": "cached_page",
          "type": "flags.10?Page"
        },
        {
          "name": "attributes",
          "type": "flags.12?Vector<WebPageAttribute>"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 1930545681,
      "predicate": "webPageNotModified",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "cached_page_views",
          "type": "flags.0?int"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 2902578717,
      "predicate": "authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "current",
          "type": "flags.0?true"
        },
        {
          "name": "official_app",
          "type": "flags.1?true"
        },
        {
          "name": "password_pending",
          "type": "flags.2?true"
        },
        {
          "name": "encrypted_requests_disabled",
          "type": "flags.3?true"
        },
        {
          "name": "call_requests_disabled",
          "type": "flags.4?true"
        },
        {
          "name": "unconfirmed",
          "type": "flags.5?true"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "app_name",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "Authorization"
    },
    {
      "id": 1275039392,
      "predicate": "account.authorizations",
      "params": [
        {
          "name": "authorization_ttl_days",
          "type": "int"
        },
        {
          "name": "authorizations",
          "type": "Vector<Authorization>"
        }
      ],
      "type": "account.Authorizations"
    },
    {
      "id": 2507886843,
      "predicate": "account.password",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_recovery",
          "type": "flags.0?true"
        },
        {
          "name": "has_secure_values",
          "type": "flags.1?true"
        },
        {
          "name": "has_password",
          "type": "flags.2?true"
        },
        {
          "name": "current_algo",
          "type": "flags.2?PasswordKdfAlgo"
        },
        {
          "name": "srp_B",
          "type": "flags.2?bytes"
        },
        {
          "name": "srp_id",
          "type": "flags.2?long"
        },
        {
          "name": "hint",
          "type": "flags.3?string"
        },
        {
          "name": "email_unconfirmed_pattern",
          "type": "flags.4?string"
        },
        {
          "name": "new_algo",
          "type": "PasswordKdfAlgo"
        },
        {
          "name": "new_secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_random",
          "type": "bytes"
        },
        {
          "name": "pending_reset_date",
          "type": "flags.5?int"
        },
        {
          "name": "login_email_pattern",
          "type": "flags.6?string"
        }
      ],
      "type": "account.Password"
    },
    {
      "id": 2589733861,
      "predicate": "account.passwordSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "email",
          "type": "flags.0?string"
        },
        {
          "name": "secure_settings",
          "type": "flags.1?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordSettings"
    },
    {
      "id": 3258394569,
      "predicate": "account.passwordInputSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "new_algo",
          "type": "flags.0?PasswordKdfAlgo"
        },
        {
          "name": "new_password_hash",
          "type": "flags.0?bytes"
        },
        {
          "name": "hint",
          "type": "flags.0?string"
        },
        {
          "name": "email",
          "type": "flags.1?string"
        },
        {
          "name": "new_secure_settings",
          "type": "flags.2?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordInputSettings"
    },
    {
      "id": 326715557,
      "predicate": "auth.passwordRecovery",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        }
      ],
      "type": "auth.PasswordRecovery"
    },
    {
      "id": 2743383929,
      "predicate": "receivedNotifyMessage",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "flags",
          "type": "int"
        }
      ],
      "type": "ReceivedNotifyMessage"
    },
    {
      "id": 2720841110,
      "predicate": "chatInviteExported",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.0?true"
        },
        {
          "name": "permanent",
          "type": "flags.5?true"
        },
        {
          "name": "request_needed",
          "type": "flags.6?true"
        },
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "start_date",
          "type": "flags.4?int"
        },
        {
          "name": "expire_date",
          "type": "flags.1?int"
        },
        {
          "name": "usage_limit",
          "type": "flags.2?int"
        },
        {
          "name": "usage",
          "type": "flags.3?int"
        },
        {
          "name": "requested",
          "type": "flags.7?int"
        },
        {
          "name": "subscription_expired",
          "type": "flags.10?int"
        },
        {
          "name": "title",
          "type": "flags.8?string"
        },
        {
          "name": "subscription_pricing",
          "type": "flags.9?StarsSubscriptionPricing"
        }
      ],
      "type": "ExportedChatInvite"
    },
    {
      "id": 3977280183,
      "predicate": "chatInvitePublicJoinRequests",
      "params": [],
      "type": "ExportedChatInvite"
    },
    {
      "id": 1516793212,
      "predicate": "chatInviteAlready",
      "params": [
        {
          "name": "chat",
          "type": "Chat"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 1553807106,
      "predicate": "chatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "flags.0?true"
        },
        {
          "name": "broadcast",
          "type": "flags.1?true"
        },
        {
          "name": "public",
          "type": "flags.2?true"
        },
        {
          "name": "megagroup",
          "type": "flags.3?true"
        },
        {
          "name": "request_needed",
          "type": "flags.6?true"
        },
        {
          "name": "verified",
          "type": "flags.7?true"
        },
        {
          "name": "scam",
          "type": "flags.8?true"
        },
        {
          "name": "fake",
          "type": "flags.9?true"
        },
        {
          "name": "can_refulfill_subscription",
          "type": "flags.11?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "about",
          "type": "flags.5?string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "flags.4?Vector<User>"
        },
        {
          "name": "color",
          "type": "int"
        },
        {
          "name": "subscription_pricing",
          "type": "flags.10?StarsSubscriptionPricing"
        },
        {
          "name": "subscription_form_id",
          "type": "flags.12?long"
        },
        {
          "name": "bot_verification",
          "type": "flags.13?BotVerification"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 1634294960,
      "predicate": "chatInvitePeek",
      "params": [
        {
          "name": "chat",
          "type": "Chat"
        },
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 4290128789,
      "predicate": "inputStickerSetEmpty",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 2649203305,
      "predicate": "inputStickerSetID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": 2250033312,
      "predicate": "inputStickerSetShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": 42402760,
      "predicate": "inputStickerSetAnimatedEmoji",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 3867103758,
      "predicate": "inputStickerSetDice",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": 215889721,
      "predicate": "inputStickerSetAnimatedEmojiAnimations",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 3364567810,
      "predicate": "inputStickerSetPremiumGifts",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 80008398,
      "predicate": "inputStickerSetEmojiGenericAnimations",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 701560302,
      "predicate": "inputStickerSetEmojiDefaultStatuses",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 1153562857,
      "predicate": "inputStickerSetEmojiDefaultTopicIcons",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 1232373075,
      "predicate": "inputStickerSetEmojiChannelDefaultStatuses",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 768691932,
      "predicate": "stickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "archived",
          "type": "flags.1?true"
        },
        {
          "name": "official",
          "type": "flags.2?true"
        },
        {
          "name": "masks",
          "type": "flags.3?true"
        },
        {
          "name": "emojis",
          "type": "flags.7?true"
        },
        {
          "name": "text_color",
          "type": "flags.9?true"
        },
        {
          "name": "channel_emoji_status",
          "type": "flags.10?true"
        },
        {
          "name": "creator",
          "type": "flags.11?true"
        },
        {
          "name": "installed_date",
          "type": "flags.0?int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "thumbs",
          "type": "flags.4?Vector<PhotoSize>"
        },
        {
          "name": "thumb_dc_id",
          "type": "flags.4?int"
        },
        {
          "name": "thumb_version",
          "type": "flags.4?int"
        },
        {
          "name": "thumb_document_id",
          "type": "flags.8?long"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "StickerSet"
    },
    {
      "id": 1846886166,
      "predicate": "messages.stickerSet",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "keywords",
          "type": "Vector<StickerKeyword>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 3556320491,
      "predicate": "messages.stickerSetNotModified",
      "params": [],
      "type": "messages.StickerSet"
    },
    {
      "id": 3262826695,
      "predicate": "botCommand",
      "params": [
        {
          "name": "command",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "BotCommand"
    },
    {
      "id": 1300890265,
      "predicate": "botInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_preview_medias",
          "type": "flags.6?true"
        },
        {
          "name": "user_id",
          "type": "flags.0?long"
        },
        {
          "name": "description",
          "type": "flags.1?string"
        },
        {
          "name": "description_photo",
          "type": "flags.4?Photo"
        },
        {
          "name": "description_document",
          "type": "flags.5?Document"
        },
        {
          "name": "commands",
          "type": "flags.2?Vector<BotCommand>"
        },
        {
          "name": "menu_button",
          "type": "flags.3?BotMenuButton"
        },
        {
          "name": "privacy_policy_url",
          "type": "flags.7?string"
        },
        {
          "name": "app_settings",
          "type": "flags.8?BotAppSettings"
        },
        {
          "name": "verifier_settings",
          "type": "flags.9?BotVerifierSettings"
        }
      ],
      "type": "BotInfo"
    },
    {
      "id": 2734311552,
      "predicate": "keyboardButton",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 629866245,
      "predicate": "keyboardButtonUrl",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 901503851,
      "predicate": "keyboardButtonCallback",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "requires_password",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2976541737,
      "predicate": "keyboardButtonRequestPhone",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 4235815743,
      "predicate": "keyboardButtonRequestGeoLocation",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2478439349,
      "predicate": "keyboardButtonSwitchInline",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "same_peer",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "peer_types",
          "type": "flags.1?Vector<InlineQueryPeerType>"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 1358175439,
      "predicate": "keyboardButtonGame",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2950250427,
      "predicate": "keyboardButtonBuy",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 280464681,
      "predicate": "keyboardButtonUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "fwd_text",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "button_id",
          "type": "int"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 3492708308,
      "predicate": "inputKeyboardButtonUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "request_write_access",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "fwd_text",
          "type": "flags.1?string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 3150401885,
      "predicate": "keyboardButtonRequestPoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "quiz",
          "type": "flags.0?Bool"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 3918005115,
      "predicate": "inputKeyboardButtonUserProfile",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 814112961,
      "predicate": "keyboardButtonUserProfile",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 326529584,
      "predicate": "keyboardButtonWebView",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2696958044,
      "predicate": "keyboardButtonSimpleWebView",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 1406648280,
      "predicate": "keyboardButtonRequestPeer",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "button_id",
          "type": "int"
        },
        {
          "name": "peer_type",
          "type": "RequestPeerType"
        },
        {
          "name": "max_quantity",
          "type": "int"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 3378916613,
      "predicate": "inputKeyboardButtonRequestPeer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name_requested",
          "type": "flags.0?true"
        },
        {
          "name": "username_requested",
          "type": "flags.1?true"
        },
        {
          "name": "photo_requested",
          "type": "flags.2?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "button_id",
          "type": "int"
        },
        {
          "name": "peer_type",
          "type": "RequestPeerType"
        },
        {
          "name": "max_quantity",
          "type": "int"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 1976723854,
      "predicate": "keyboardButtonCopy",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "copy_text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2002815875,
      "predicate": "keyboardButtonRow",
      "params": [
        {
          "name": "buttons",
          "type": "Vector<KeyboardButton>"
        }
      ],
      "type": "KeyboardButtonRow"
    },
    {
      "id": 2688441221,
      "predicate": "replyKeyboardHide",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 2259946248,
      "predicate": "replyKeyboardForceReply",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        },
        {
          "name": "placeholder",
          "type": "flags.3?string"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 2245892561,
      "predicate": "replyKeyboardMarkup",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "resize",
          "type": "flags.0?true"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        },
        {
          "name": "persistent",
          "type": "flags.4?true"
        },
        {
          "name": "rows",
          "type": "Vector<KeyboardButtonRow>"
        },
        {
          "name": "placeholder",
          "type": "flags.3?string"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 1218642516,
      "predicate": "replyInlineMarkup",
      "params": [
        {
          "name": "rows",
          "type": "Vector<KeyboardButtonRow>"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 3146955413,
      "predicate": "messageEntityUnknown",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 4194588573,
      "predicate": "messageEntityMention",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1868782349,
      "predicate": "messageEntityHashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1827637959,
      "predicate": "messageEntityBotCommand",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1859134776,
      "predicate": "messageEntityUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1692693954,
      "predicate": "messageEntityEmail",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 3177253833,
      "predicate": "messageEntityBold",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 2188348256,
      "predicate": "messageEntityItalic",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 681706865,
      "predicate": "messageEntityCode",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1938967520,
      "predicate": "messageEntityPre",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1990644519,
      "predicate": "messageEntityTextUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 3699052864,
      "predicate": "messageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 546203849,
      "predicate": "inputMessageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 2607407947,
      "predicate": "messageEntityPhone",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1280209983,
      "predicate": "messageEntityCashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 2622389899,
      "predicate": "messageEntityUnderline",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 3204879316,
      "predicate": "messageEntityStrike",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1981704948,
      "predicate": "messageEntityBankCard",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 852137487,
      "predicate": "messageEntitySpoiler",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 3369010680,
      "predicate": "messageEntityCustomEmoji",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "document_id",
          "type": "long"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 4056722092,
      "predicate": "messageEntityBlockquote",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "collapsed",
          "type": "flags.0?true"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 4002160262,
      "predicate": "inputChannelEmpty",
      "params": [],
      "type": "InputChannel"
    },
    {
      "id": 4082822184,
      "predicate": "inputChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputChannel"
    },
    {
      "id": 1536380829,
      "predicate": "inputChannelFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "long"
        }
      ],
      "type": "InputChannel"
    },
    {
      "id": 2131196633,
      "predicate": "contacts.resolvedPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    {
      "id": 182649427,
      "predicate": "messageRange",
      "params": [
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "MessageRange"
    },
    {
      "id": 1041346555,
      "predicate": "updates.channelDifferenceEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 2763835134,
      "predicate": "updates.channelDifferenceTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "dialog",
          "type": "Dialog"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 543450958,
      "predicate": "updates.channelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 2496933607,
      "predicate": "channelMessagesFilterEmpty",
      "params": [],
      "type": "ChannelMessagesFilter"
    },
    {
      "id": 3447183703,
      "predicate": "channelMessagesFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_new_messages",
          "type": "flags.1?true"
        },
        {
          "name": "ranges",
          "type": "Vector<MessageRange>"
        }
      ],
      "type": "ChannelMessagesFilter"
    },
    {
      "id": 3409540633,
      "predicate": "channelParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "subscription_until_date",
          "type": "flags.0?int"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 1331723247,
      "predicate": "channelParticipantSelf",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "via_request",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "inviter_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "subscription_until_date",
          "type": "flags.1?int"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 803602899,
      "predicate": "channelParticipantCreator",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "flags.0?string"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 885242707,
      "predicate": "channelParticipantAdmin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_edit",
          "type": "flags.0?true"
        },
        {
          "name": "self",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "inviter_id",
          "type": "flags.1?long"
        },
        {
          "name": "promoted_by",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "flags.2?string"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 1844969806,
      "predicate": "channelParticipantBanned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "left",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "kicked_by",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 453242886,
      "predicate": "channelParticipantLeft",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 3728686201,
      "predicate": "channelParticipantsRecent",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 3026225513,
      "predicate": "channelParticipantsAdmins",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 2746567045,
      "predicate": "channelParticipantsKicked",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 2966521435,
      "predicate": "channelParticipantsBots",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 338142689,
      "predicate": "channelParticipantsBanned",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 106343499,
      "predicate": "channelParticipantsSearch",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 3144345741,
      "predicate": "channelParticipantsContacts",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 3763035371,
      "predicate": "channelParticipantsMentions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "q",
          "type": "flags.0?string"
        },
        {
          "name": "top_msg_id",
          "type": "flags.1?int"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 2595290799,
      "predicate": "channels.channelParticipants",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector<ChannelParticipant>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": 4028055529,
      "predicate": "channels.channelParticipantsNotModified",
      "params": [],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": 3753378583,
      "predicate": "channels.channelParticipant",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    {
      "id": 2013922064,
      "predicate": "help.termsOfService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "DataJSON"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "min_age_confirm",
          "type": "flags.1?int"
        }
      ],
      "type": "help.TermsOfService"
    },
    {
      "id": 3892468898,
      "predicate": "messages.savedGifsNotModified",
      "params": [],
      "type": "messages.SavedGifs"
    },
    {
      "id": 2225089037,
      "predicate": "messages.savedGifs",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "gifs",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.SavedGifs"
    },
    {
      "id": 864077702,
      "predicate": "inputBotInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "invert_media",
          "type": "flags.3?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 1036876423,
      "predicate": "inputBotInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "invert_media",
          "type": "flags.3?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 2526190213,
      "predicate": "inputBotInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.0?int"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.3?int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 1098628881,
      "predicate": "inputBotInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 2800599037,
      "predicate": "inputBotInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 1262639204,
      "predicate": "inputBotInlineMessageGame",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 3622273573,
      "predicate": "inputBotInlineMessageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?InputWebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "provider_data",
          "type": "DataJSON"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 3185362192,
      "predicate": "inputBotInlineMessageMediaWebPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "invert_media",
          "type": "flags.3?true"
        },
        {
          "name": "force_large_media",
          "type": "flags.4?true"
        },
        {
          "name": "force_small_media",
          "type": "flags.5?true"
        },
        {
          "name": "optional",
          "type": "flags.6?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 2294256409,
      "predicate": "inputBotInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?InputWebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?InputWebDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 2832753831,
      "predicate": "inputBotInlineResultPhoto",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "InputPhoto"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 4294507972,
      "predicate": "inputBotInlineResultDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 1336154098,
      "predicate": "inputBotInlineResultGame",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 1984755728,
      "predicate": "botInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "invert_media",
          "type": "flags.3?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 2357159394,
      "predicate": "botInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "invert_media",
          "type": "flags.3?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 85477117,
      "predicate": "botInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.0?int"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.3?int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 2324063644,
      "predicate": "botInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 416402882,
      "predicate": "botInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 894081801,
      "predicate": "botInlineMessageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.1?true"
        },
        {
          "name": "test",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?WebDocument"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 2157631910,
      "predicate": "botInlineMessageMediaWebPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "invert_media",
          "type": "flags.3?true"
        },
        {
          "name": "force_large_media",
          "type": "flags.4?true"
        },
        {
          "name": "force_small_media",
          "type": "flags.5?true"
        },
        {
          "name": "manual",
          "type": "flags.7?true"
        },
        {
          "name": "safe",
          "type": "flags.8?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 295067450,
      "predicate": "botInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?WebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?WebDocument"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    {
      "id": 400266251,
      "predicate": "botInlineMediaResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    {
      "id": 3760321270,
      "predicate": "messages.botResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "next_offset",
          "type": "flags.1?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.2?InlineBotSwitchPM"
        },
        {
          "name": "switch_webview",
          "type": "flags.3?InlineBotWebView"
        },
        {
          "name": "results",
          "type": "Vector<BotInlineResult>"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.BotResults"
    },
    {
      "id": 1571494644,
      "predicate": "exportedMessageLink",
      "params": [
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "html",
          "type": "string"
        }
      ],
      "type": "ExportedMessageLink"
    },
    {
      "id": 1313731771,
      "predicate": "messageFwdHeader",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "imported",
          "type": "flags.7?true"
        },
        {
          "name": "saved_out",
          "type": "flags.11?true"
        },
        {
          "name": "from_id",
          "type": "flags.0?Peer"
        },
        {
          "name": "from_name",
          "type": "flags.5?string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "channel_post",
          "type": "flags.2?int"
        },
        {
          "name": "post_author",
          "type": "flags.3?string"
        },
        {
          "name": "saved_from_peer",
          "type": "flags.4?Peer"
        },
        {
          "name": "saved_from_msg_id",
          "type": "flags.4?int"
        },
        {
          "name": "saved_from_id",
          "type": "flags.8?Peer"
        },
        {
          "name": "saved_from_name",
          "type": "flags.9?string"
        },
        {
          "name": "saved_date",
          "type": "flags.10?int"
        },
        {
          "name": "psa_type",
          "type": "flags.6?string"
        }
      ],
      "type": "MessageFwdHeader"
    },
    {
      "id": 1923290508,
      "predicate": "auth.codeTypeSms",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 1948046307,
      "predicate": "auth.codeTypeCall",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 577556219,
      "predicate": "auth.codeTypeFlashCall",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 3592083182,
      "predicate": "auth.codeTypeMissedCall",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 116234636,
      "predicate": "auth.codeTypeFragmentSms",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 1035688326,
      "predicate": "auth.sentCodeTypeApp",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 3221273506,
      "predicate": "auth.sentCodeTypeSms",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 1398007207,
      "predicate": "auth.sentCodeTypeCall",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 2869151449,
      "predicate": "auth.sentCodeTypeFlashCall",
      "params": [
        {
          "name": "pattern",
          "type": "string"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 2181063812,
      "predicate": "auth.sentCodeTypeMissedCall",
      "params": [
        {
          "name": "prefix",
          "type": "string"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 4098946459,
      "predicate": "auth.sentCodeTypeEmailCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "apple_signin_allowed",
          "type": "flags.0?true"
        },
        {
          "name": "google_signin_allowed",
          "type": "flags.1?true"
        },
        {
          "name": "email_pattern",
          "type": "string"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "reset_available_period",
          "type": "flags.3?int"
        },
        {
          "name": "reset_pending_date",
          "type": "flags.4?int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 2773032426,
      "predicate": "auth.sentCodeTypeSetUpEmailRequired",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "apple_signin_allowed",
          "type": "flags.0?true"
        },
        {
          "name": "google_signin_allowed",
          "type": "flags.1?true"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 3646315577,
      "predicate": "auth.sentCodeTypeFragmentSms",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 10475318,
      "predicate": "auth.sentCodeTypeFirebaseSms",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "nonce",
          "type": "flags.0?bytes"
        },
        {
          "name": "play_integrity_project_id",
          "type": "flags.2?long"
        },
        {
          "name": "play_integrity_nonce",
          "type": "flags.2?bytes"
        },
        {
          "name": "receipt",
          "type": "flags.1?string"
        },
        {
          "name": "push_timeout",
          "type": "flags.1?int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 2752949377,
      "predicate": "auth.sentCodeTypeSmsWord",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "beginning",
          "type": "flags.0?string"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 3010958511,
      "predicate": "auth.sentCodeTypeSmsPhrase",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "beginning",
          "type": "flags.0?string"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 911761060,
      "predicate": "messages.botCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "has_url",
          "type": "flags.3?true"
        },
        {
          "name": "native_ui",
          "type": "flags.4?true"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    {
      "id": 649453030,
      "predicate": "messages.messageEditData",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "caption",
          "type": "flags.0?true"
        }
      ],
      "type": "messages.MessageEditData"
    },
    {
      "id": 2299280777,
      "predicate": "inputBotInlineMessageID",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputBotInlineMessageID"
    },
    {
      "id": 3067680215,
      "predicate": "inputBotInlineMessageID64",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "owner_id",
          "type": "long"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputBotInlineMessageID"
    },
    {
      "id": 1008755359,
      "predicate": "inlineBotSwitchPM",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "InlineBotSwitchPM"
    },
    {
      "id": 863093588,
      "predicate": "messages.peerDialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": 3989684315,
      "predicate": "topPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "rating",
          "type": "double"
        }
      ],
      "type": "TopPeer"
    },
    {
      "id": 2875595611,
      "predicate": "topPeerCategoryBotsPM",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 344356834,
      "predicate": "topPeerCategoryBotsInline",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 104314861,
      "predicate": "topPeerCategoryCorrespondents",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 3172442442,
      "predicate": "topPeerCategoryGroups",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 371037736,
      "predicate": "topPeerCategoryChannels",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 511092620,
      "predicate": "topPeerCategoryPhoneCalls",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 2822794409,
      "predicate": "topPeerCategoryForwardUsers",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 4226728176,
      "predicate": "topPeerCategoryForwardChats",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 4255022060,
      "predicate": "topPeerCategoryBotsApp",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 4219683473,
      "predicate": "topPeerCategoryPeers",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "peers",
          "type": "Vector<TopPeer>"
        }
      ],
      "type": "TopPeerCategoryPeers"
    },
    {
      "id": 3727060725,
      "predicate": "contacts.topPeersNotModified",
      "params": [],
      "type": "contacts.TopPeers"
    },
    {
      "id": 1891070632,
      "predicate": "contacts.topPeers",
      "params": [
        {
          "name": "categories",
          "type": "Vector<TopPeerCategoryPeers>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.TopPeers"
    },
    {
      "id": 3039597469,
      "predicate": "contacts.topPeersDisabled",
      "params": [],
      "type": "contacts.TopPeers"
    },
    {
      "id": 453805082,
      "predicate": "draftMessageEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "flags.0?int"
        }
      ],
      "type": "DraftMessage"
    },
    {
      "id": 761606687,
      "predicate": "draftMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "invert_media",
          "type": "flags.6?true"
        },
        {
          "name": "reply_to",
          "type": "flags.4?InputReplyTo"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "media",
          "type": "flags.5?InputMedia"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "effect",
          "type": "flags.7?long"
        }
      ],
      "type": "DraftMessage"
    },
    {
      "id": 3336309862,
      "predicate": "messages.featuredStickersNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 3191351558,
      "predicate": "messages.featuredStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "premium",
          "type": "flags.0?true"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        },
        {
          "name": "unread",
          "type": "Vector<long>"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 186120336,
      "predicate": "messages.recentStickersNotModified",
      "params": [],
      "type": "messages.RecentStickers"
    },
    {
      "id": 2295561302,
      "predicate": "messages.recentStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        },
        {
          "name": "dates",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.RecentStickers"
    },
    {
      "id": 1338747336,
      "predicate": "messages.archivedStickers",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    {
      "id": 946083368,
      "predicate": "messages.stickerSetInstallResultSuccess",
      "params": [],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": 904138920,
      "predicate": "messages.stickerSetInstallResultArchive",
      "params": [
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": 1678812626,
      "predicate": "stickerSetCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "cover",
          "type": "Document"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": 872932635,
      "predicate": "stickerSetMultiCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "covers",
          "type": "Vector<Document>"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": 1087454222,
      "predicate": "stickerSetFullCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "keywords",
          "type": "Vector<StickerKeyword>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": 2008112412,
      "predicate": "stickerSetNoCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": 2933316530,
      "predicate": "maskCoords",
      "params": [
        {
          "name": "n",
          "type": "int"
        },
        {
          "name": "x",
          "type": "double"
        },
        {
          "name": "y",
          "type": "double"
        },
        {
          "name": "zoom",
          "type": "double"
        }
      ],
      "type": "MaskCoords"
    },
    {
      "id": 1251549527,
      "predicate": "inputStickeredMediaPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputStickeredMedia"
    },
    {
      "id": 70813275,
      "predicate": "inputStickeredMediaDocument",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        }
      ],
      "type": "InputStickeredMedia"
    },
    {
      "id": 3187238203,
      "predicate": "game",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        }
      ],
      "type": "Game"
    },
    {
      "id": 53231223,
      "predicate": "inputGameID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputGame"
    },
    {
      "id": 3274827786,
      "predicate": "inputGameShortName",
      "params": [
        {
          "name": "bot_id",
          "type": "InputUser"
        },
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputGame"
    },
    {
      "id": 1940093419,
      "predicate": "highScore",
      "params": [
        {
          "name": "pos",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "HighScore"
    },
    {
      "id": 2587622809,
      "predicate": "messages.highScores",
      "params": [
        {
          "name": "scores",
          "type": "Vector<HighScore>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": 3695018575,
      "predicate": "textEmpty",
      "params": [],
      "type": "RichText"
    },
    {
      "id": 1950782688,
      "predicate": "textPlain",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 1730456516,
      "predicate": "textBold",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3641877916,
      "predicate": "textItalic",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3240501956,
      "predicate": "textUnderline",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 2616769429,
      "predicate": "textStrike",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 1816074681,
      "predicate": "textFixed",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 1009288385,
      "predicate": "textUrl",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3730443734,
      "predicate": "textEmail",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 2120376535,
      "predicate": "textConcat",
      "params": [
        {
          "name": "texts",
          "type": "Vector<RichText>"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3983181060,
      "predicate": "textSubscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3355139585,
      "predicate": "textSuperscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 55281185,
      "predicate": "textMarked",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 483104362,
      "predicate": "textPhone",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 136105807,
      "predicate": "textImage",
      "params": [
        {
          "name": "document_id",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 894777186,
      "predicate": "textAnchor",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 324435594,
      "predicate": "pageBlockUnsupported",
      "params": [],
      "type": "PageBlock"
    },
    {
      "id": 1890305021,
      "predicate": "pageBlockTitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2415565343,
      "predicate": "pageBlockSubtitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3132089824,
      "predicate": "pageBlockAuthorDate",
      "params": [
        {
          "name": "author",
          "type": "RichText"
        },
        {
          "name": "published_date",
          "type": "int"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3218105580,
      "predicate": "pageBlockHeader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 4046173921,
      "predicate": "pageBlockSubheader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1182402406,
      "predicate": "pageBlockParagraph",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3228621118,
      "predicate": "pageBlockPreformatted",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1216809369,
      "predicate": "pageBlockFooter",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3676352904,
      "predicate": "pageBlockDivider",
      "params": [],
      "type": "PageBlock"
    },
    {
      "id": 3456972720,
      "predicate": "pageBlockAnchor",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3840442385,
      "predicate": "pageBlockList",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageListItem>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 641563686,
      "predicate": "pageBlockBlockquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1329878739,
      "predicate": "pageBlockPullquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 391759200,
      "predicate": "pageBlockPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        },
        {
          "name": "url",
          "type": "flags.0?string"
        },
        {
          "name": "webpage_id",
          "type": "flags.0?long"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2089805750,
      "predicate": "pageBlockVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "autoplay",
          "type": "flags.0?true"
        },
        {
          "name": "loop",
          "type": "flags.1?true"
        },
        {
          "name": "video_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 972174080,
      "predicate": "pageBlockCover",
      "params": [
        {
          "name": "cover",
          "type": "PageBlock"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2826014149,
      "predicate": "pageBlockEmbed",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "full_width",
          "type": "flags.0?true"
        },
        {
          "name": "allow_scrolling",
          "type": "flags.3?true"
        },
        {
          "name": "url",
          "type": "flags.1?string"
        },
        {
          "name": "html",
          "type": "flags.2?string"
        },
        {
          "name": "poster_photo_id",
          "type": "flags.4?long"
        },
        {
          "name": "w",
          "type": "flags.5?int"
        },
        {
          "name": "h",
          "type": "flags.5?int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 4065961995,
      "predicate": "pageBlockEmbedPost",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "author_photo_id",
          "type": "long"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1705048653,
      "predicate": "pageBlockCollage",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 52401552,
      "predicate": "pageBlockSlideshow",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 4011282869,
      "predicate": "pageBlockChannel",
      "params": [
        {
          "name": "channel",
          "type": "Chat"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2151899626,
      "predicate": "pageBlockAudio",
      "params": [
        {
          "name": "audio_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 504660880,
      "predicate": "pageBlockKicker",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3209554562,
      "predicate": "pageBlockTable",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bordered",
          "type": "flags.0?true"
        },
        {
          "name": "striped",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "rows",
          "type": "Vector<PageTableRow>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2592793057,
      "predicate": "pageBlockOrderedList",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageListOrderedItem>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1987480557,
      "predicate": "pageBlockDetails",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "open",
          "type": "flags.0?true"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "title",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 370236054,
      "predicate": "pageBlockRelatedArticles",
      "params": [
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "articles",
          "type": "Vector<PageRelatedArticle>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2756656886,
      "predicate": "pageBlockMap",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2246320897,
      "predicate": "phoneCallDiscardReasonMissed",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 3767910816,
      "predicate": "phoneCallDiscardReasonDisconnect",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 1471006352,
      "predicate": "phoneCallDiscardReasonHangup",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 4210550985,
      "predicate": "phoneCallDiscardReasonBusy",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 2950871097,
      "predicate": "phoneCallDiscardReasonAllowGroupCall",
      "params": [
        {
          "name": "encrypted_key",
          "type": "bytes"
        }
      ],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 2104790276,
      "predicate": "dataJSON",
      "params": [
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "DataJSON"
    },
    {
      "id": 3408489464,
      "predicate": "labeledPrice",
      "params": [
        {
          "name": "label",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "LabeledPrice"
    },
    {
      "id": 77522308,
      "predicate": "invoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "test",
          "type": "flags.0?true"
        },
        {
          "name": "name_requested",
          "type": "flags.1?true"
        },
        {
          "name": "phone_requested",
          "type": "flags.2?true"
        },
        {
          "name": "email_requested",
          "type": "flags.3?true"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.4?true"
        },
        {
          "name": "flexible",
          "type": "flags.5?true"
        },
        {
          "name": "phone_to_provider",
          "type": "flags.6?true"
        },
        {
          "name": "email_to_provider",
          "type": "flags.7?true"
        },
        {
          "name": "recurring",
          "type": "flags.9?true"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector<LabeledPrice>"
        },
        {
          "name": "max_tip_amount",
          "type": "flags.8?long"
        },
        {
          "name": "suggested_tip_amounts",
          "type": "flags.8?Vector<long>"
        },
        {
          "name": "terms_url",
          "type": "flags.10?string"
        },
        {
          "name": "subscription_period",
          "type": "flags.11?int"
        }
      ],
      "type": "Invoice"
    },
    {
      "id": 3926049406,
      "predicate": "paymentCharge",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "provider_charge_id",
          "type": "string"
        }
      ],
      "type": "PaymentCharge"
    },
    {
      "id": 512535275,
      "predicate": "postAddress",
      "params": [
        {
          "name": "street_line1",
          "type": "string"
        },
        {
          "name": "street_line2",
          "type": "string"
        },
        {
          "name": "city",
          "type": "string"
        },
        {
          "name": "state",
          "type": "string"
        },
        {
          "name": "country_iso2",
          "type": "string"
        },
        {
          "name": "post_code",
          "type": "string"
        }
      ],
      "type": "PostAddress"
    },
    {
      "id": 2426158996,
      "predicate": "paymentRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name",
          "type": "flags.0?string"
        },
        {
          "name": "phone",
          "type": "flags.1?string"
        },
        {
          "name": "email",
          "type": "flags.2?string"
        },
        {
          "name": "shipping_address",
          "type": "flags.3?PostAddress"
        }
      ],
      "type": "PaymentRequestedInfo"
    },
    {
      "id": 3452074527,
      "predicate": "paymentSavedCredentialsCard",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "PaymentSavedCredentials"
    },
    {
      "id": 475467473,
      "predicate": "webDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "WebDocument"
    },
    {
      "id": 4190682310,
      "predicate": "webDocumentNoProxy",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "WebDocument"
    },
    {
      "id": 2616017741,
      "predicate": "inputWebDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "InputWebDocument"
    },
    {
      "id": 3258570374,
      "predicate": "inputWebFileLocation",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWebFileLocation"
    },
    {
      "id": 2669814217,
      "predicate": "inputWebFileGeoPointLocation",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "scale",
          "type": "int"
        }
      ],
      "type": "InputWebFileLocation"
    },
    {
      "id": 4100974884,
      "predicate": "inputWebFileAudioAlbumThumbLocation",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "small",
          "type": "flags.2?true"
        },
        {
          "name": "document",
          "type": "flags.0?InputDocument"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "performer",
          "type": "flags.1?string"
        }
      ],
      "type": "InputWebFileLocation"
    },
    {
      "id": 568808380,
      "predicate": "upload.webFile",
      "params": [
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "file_type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.WebFile"
    },
    {
      "id": 2684716881,
      "predicate": "payments.paymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_save_credentials",
          "type": "flags.2?true"
        },
        {
          "name": "password_missing",
          "type": "flags.3?true"
        },
        {
          "name": "form_id",
          "type": "long"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.5?WebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "provider_id",
          "type": "long"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "native_provider",
          "type": "flags.4?string"
        },
        {
          "name": "native_params",
          "type": "flags.4?DataJSON"
        },
        {
          "name": "additional_methods",
          "type": "flags.6?Vector<PaymentFormMethod>"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "saved_credentials",
          "type": "flags.1?Vector<PaymentSavedCredentials>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": 2079764828,
      "predicate": "payments.paymentFormStars",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "form_id",
          "type": "long"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.5?WebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": 3022376929,
      "predicate": "payments.paymentFormStarGift",
      "params": [
        {
          "name": "form_id",
          "type": "long"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": 3510966403,
      "predicate": "payments.validatedRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector<ShippingOption>"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    {
      "id": 1314881805,
      "predicate": "payments.paymentResult",
      "params": [
        {
          "name": "updates",
          "type": "Updates"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": 3628142905,
      "predicate": "payments.paymentVerificationNeeded",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": 1891958275,
      "predicate": "payments.paymentReceipt",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "provider_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.2?WebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping",
          "type": "flags.1?ShippingOption"
        },
        {
          "name": "tip_amount",
          "type": "flags.3?long"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "credentials_title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    {
      "id": 3669751866,
      "predicate": "payments.paymentReceiptStars",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.2?WebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "transaction_id",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    {
      "id": 4220511292,
      "predicate": "payments.savedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_saved_credentials",
          "type": "flags.1?true"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        }
      ],
      "type": "payments.SavedInfo"
    },
    {
      "id": 3238965967,
      "predicate": "inputPaymentCredentialsSaved",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "tmp_password",
          "type": "bytes"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 873977640,
      "predicate": "inputPaymentCredentials",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 178373535,
      "predicate": "inputPaymentCredentialsApplePay",
      "params": [
        {
          "name": "payment_data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 2328045569,
      "predicate": "inputPaymentCredentialsGooglePay",
      "params": [
        {
          "name": "payment_token",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 3680828724,
      "predicate": "account.tmpPassword",
      "params": [
        {
          "name": "tmp_password",
          "type": "bytes"
        },
        {
          "name": "valid_until",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    {
      "id": 3055631583,
      "predicate": "shippingOption",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector<LabeledPrice>"
        }
      ],
      "type": "ShippingOption"
    },
    {
      "id": 853188252,
      "predicate": "inputStickerSetItem",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "emoji",
          "type": "string"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        },
        {
          "name": "keywords",
          "type": "flags.1?string"
        }
      ],
      "type": "InputStickerSetItem"
    },
    {
      "id": 506920429,
      "predicate": "inputPhoneCall",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPhoneCall"
    },
    {
      "id": 1399245077,
      "predicate": "phoneCallEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 4006881368,
      "predicate": "phoneCallWaiting",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "participant_id",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "receive_date",
          "type": "flags.0?int"
        },
        {
          "name": "conference_call",
          "type": "flags.8?InputGroupCall"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 1161174115,
      "predicate": "phoneCallRequested",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "participant_id",
          "type": "long"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "conference_call",
          "type": "flags.8?InputGroupCall"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 587035009,
      "predicate": "phoneCallAccepted",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "participant_id",
          "type": "long"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "conference_call",
          "type": "flags.8?InputGroupCall"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 1000707084,
      "predicate": "phoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "p2p_allowed",
          "type": "flags.5?true"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "participant_id",
          "type": "long"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "connections",
          "type": "Vector<PhoneConnection>"
        },
        {
          "name": "start_date",
          "type": "int"
        },
        {
          "name": "custom_parameters",
          "type": "flags.7?DataJSON"
        },
        {
          "name": "conference_call",
          "type": "flags.8?InputGroupCall"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 4191311107,
      "predicate": "phoneCallDiscarded",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "need_rating",
          "type": "flags.2?true"
        },
        {
          "name": "need_debug",
          "type": "flags.3?true"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        },
        {
          "name": "conference_call",
          "type": "flags.8?InputGroupCall"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 2629903303,
      "predicate": "phoneConnection",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "tcp",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "ipv6",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "peer_tag",
          "type": "bytes"
        }
      ],
      "type": "PhoneConnection"
    },
    {
      "id": 1667228533,
      "predicate": "phoneConnectionWebrtc",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "turn",
          "type": "flags.0?true"
        },
        {
          "name": "stun",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "ipv6",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "password",
          "type": "string"
        }
      ],
      "type": "PhoneConnection"
    },
    {
      "id": 4236742600,
      "predicate": "phoneCallProtocol",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "udp_p2p",
          "type": "flags.0?true"
        },
        {
          "name": "udp_reflector",
          "type": "flags.1?true"
        },
        {
          "name": "min_layer",
          "type": "int"
        },
        {
          "name": "max_layer",
          "type": "int"
        },
        {
          "name": "library_versions",
          "type": "Vector<string>"
        }
      ],
      "type": "PhoneCallProtocol"
    },
    {
      "id": 3968000320,
      "predicate": "phone.phoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 4004045934,
      "predicate": "upload.cdnFileReuploadNeeded",
      "params": [
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": 2845821519,
      "predicate": "upload.cdnFile",
      "params": [
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": 3380800186,
      "predicate": "cdnPublicKey",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "CdnPublicKey"
    },
    {
      "id": 1462101002,
      "predicate": "cdnConfig",
      "params": [
        {
          "name": "public_keys",
          "type": "Vector<CdnPublicKey>"
        }
      ],
      "type": "CdnConfig"
    },
    {
      "id": 3402727926,
      "predicate": "langPackString",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": 1816636575,
      "predicate": "langPackStringPluralized",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "zero_value",
          "type": "flags.0?string"
        },
        {
          "name": "one_value",
          "type": "flags.1?string"
        },
        {
          "name": "two_value",
          "type": "flags.2?string"
        },
        {
          "name": "few_value",
          "type": "flags.3?string"
        },
        {
          "name": "many_value",
          "type": "flags.4?string"
        },
        {
          "name": "other_value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": 695856818,
      "predicate": "langPackStringDeleted",
      "params": [
        {
          "name": "key",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": 4085629430,
      "predicate": "langPackDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "strings",
          "type": "Vector<LangPackString>"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": 4006239459,
      "predicate": "langPackLanguage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "official",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.2?true"
        },
        {
          "name": "beta",
          "type": "flags.3?true"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "native_name",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "base_lang_code",
          "type": "flags.1?string"
        },
        {
          "name": "plural_code",
          "type": "string"
        },
        {
          "name": "strings_count",
          "type": "int"
        },
        {
          "name": "translated_count",
          "type": "int"
        },
        {
          "name": "translations_url",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    },
    {
      "id": 3873421349,
      "predicate": "channelAdminLogEventActionChangeTitle",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1427671598,
      "predicate": "channelAdminLogEventActionChangeAbout",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1783299128,
      "predicate": "channelAdminLogEventActionChangeUsername",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1129042607,
      "predicate": "channelAdminLogEventActionChangePhoto",
      "params": [
        {
          "name": "prev_photo",
          "type": "Photo"
        },
        {
          "name": "new_photo",
          "type": "Photo"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 460916654,
      "predicate": "channelAdminLogEventActionToggleInvites",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 648939889,
      "predicate": "channelAdminLogEventActionToggleSignatures",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3924306968,
      "predicate": "channelAdminLogEventActionUpdatePinned",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1889215493,
      "predicate": "channelAdminLogEventActionEditMessage",
      "params": [
        {
          "name": "prev_message",
          "type": "Message"
        },
        {
          "name": "new_message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1121994683,
      "predicate": "channelAdminLogEventActionDeleteMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 405815507,
      "predicate": "channelAdminLogEventActionParticipantJoin",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 4170676210,
      "predicate": "channelAdminLogEventActionParticipantLeave",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3810276568,
      "predicate": "channelAdminLogEventActionParticipantInvite",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3872931198,
      "predicate": "channelAdminLogEventActionParticipantToggleBan",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3580323600,
      "predicate": "channelAdminLogEventActionParticipantToggleAdmin",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 2982398631,
      "predicate": "channelAdminLogEventActionChangeStickerSet",
      "params": [
        {
          "name": "prev_stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "new_stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1599903217,
      "predicate": "channelAdminLogEventActionTogglePreHistoryHidden",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 771095562,
      "predicate": "channelAdminLogEventActionDefaultBannedRights",
      "params": [
        {
          "name": "prev_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "new_banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 2399639107,
      "predicate": "channelAdminLogEventActionStopPoll",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 84703944,
      "predicate": "channelAdminLogEventActionChangeLinkedChat",
      "params": [
        {
          "name": "prev_value",
          "type": "long"
        },
        {
          "name": "new_value",
          "type": "long"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 241923758,
      "predicate": "channelAdminLogEventActionChangeLocation",
      "params": [
        {
          "name": "prev_value",
          "type": "ChannelLocation"
        },
        {
          "name": "new_value",
          "type": "ChannelLocation"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1401984889,
      "predicate": "channelAdminLogEventActionToggleSlowMode",
      "params": [
        {
          "name": "prev_value",
          "type": "int"
        },
        {
          "name": "new_value",
          "type": "int"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 589338437,
      "predicate": "channelAdminLogEventActionStartGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3684667712,
      "predicate": "channelAdminLogEventActionDiscardGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 4179895506,
      "predicate": "channelAdminLogEventActionParticipantMute",
      "params": [
        {
          "name": "participant",
          "type": "GroupCallParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3863226816,
      "predicate": "channelAdminLogEventActionParticipantUnmute",
      "params": [
        {
          "name": "participant",
          "type": "GroupCallParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1456906823,
      "predicate": "channelAdminLogEventActionToggleGroupCallSetting",
      "params": [
        {
          "name": "join_muted",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 4271882584,
      "predicate": "channelAdminLogEventActionParticipantJoinByInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "via_chatlist",
          "type": "flags.0?true"
        },
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1515256996,
      "predicate": "channelAdminLogEventActionExportedInviteDelete",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1091179342,
      "predicate": "channelAdminLogEventActionExportedInviteRevoke",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3910056793,
      "predicate": "channelAdminLogEventActionExportedInviteEdit",
      "params": [
        {
          "name": "prev_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "new_invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1048537159,
      "predicate": "channelAdminLogEventActionParticipantVolume",
      "params": [
        {
          "name": "participant",
          "type": "GroupCallParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1855199800,
      "predicate": "channelAdminLogEventActionChangeHistoryTTL",
      "params": [
        {
          "name": "prev_value",
          "type": "int"
        },
        {
          "name": "new_value",
          "type": "int"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 2947945546,
      "predicate": "channelAdminLogEventActionParticipantJoinByRequest",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "approved_by",
          "type": "long"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3408578406,
      "predicate": "channelAdminLogEventActionToggleNoForwards",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 663693416,
      "predicate": "channelAdminLogEventActionSendMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3192786680,
      "predicate": "channelAdminLogEventActionChangeAvailableReactions",
      "params": [
        {
          "name": "prev_value",
          "type": "ChatReactions"
        },
        {
          "name": "new_value",
          "type": "ChatReactions"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 4031755177,
      "predicate": "channelAdminLogEventActionChangeUsernames",
      "params": [
        {
          "name": "prev_value",
          "type": "Vector<string>"
        },
        {
          "name": "new_value",
          "type": "Vector<string>"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 46949251,
      "predicate": "channelAdminLogEventActionToggleForum",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1483767080,
      "predicate": "channelAdminLogEventActionCreateTopic",
      "params": [
        {
          "name": "topic",
          "type": "ForumTopic"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 4033864200,
      "predicate": "channelAdminLogEventActionEditTopic",
      "params": [
        {
          "name": "prev_topic",
          "type": "ForumTopic"
        },
        {
          "name": "new_topic",
          "type": "ForumTopic"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 2920712457,
      "predicate": "channelAdminLogEventActionDeleteTopic",
      "params": [
        {
          "name": "topic",
          "type": "ForumTopic"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1569535291,
      "predicate": "channelAdminLogEventActionPinTopic",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "prev_topic",
          "type": "flags.0?ForumTopic"
        },
        {
          "name": "new_topic",
          "type": "flags.1?ForumTopic"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1693675004,
      "predicate": "channelAdminLogEventActionToggleAntiSpam",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1469507456,
      "predicate": "channelAdminLogEventActionChangePeerColor",
      "params": [
        {
          "name": "prev_value",
          "type": "PeerColor"
        },
        {
          "name": "new_value",
          "type": "PeerColor"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1581742885,
      "predicate": "channelAdminLogEventActionChangeProfilePeerColor",
      "params": [
        {
          "name": "prev_value",
          "type": "PeerColor"
        },
        {
          "name": "new_value",
          "type": "PeerColor"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 834362706,
      "predicate": "channelAdminLogEventActionChangeWallpaper",
      "params": [
        {
          "name": "prev_value",
          "type": "WallPaper"
        },
        {
          "name": "new_value",
          "type": "WallPaper"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1051328177,
      "predicate": "channelAdminLogEventActionChangeEmojiStatus",
      "params": [
        {
          "name": "prev_value",
          "type": "EmojiStatus"
        },
        {
          "name": "new_value",
          "type": "EmojiStatus"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1188577451,
      "predicate": "channelAdminLogEventActionChangeEmojiStickerSet",
      "params": [
        {
          "name": "prev_stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "new_stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1621597305,
      "predicate": "channelAdminLogEventActionToggleSignatureProfiles",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1684286899,
      "predicate": "channelAdminLogEventActionParticipantSubExtend",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 531458253,
      "predicate": "channelAdminLogEvent",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "action",
          "type": "ChannelAdminLogEventAction"
        }
      ],
      "type": "ChannelAdminLogEvent"
    },
    {
      "id": 3985307469,
      "predicate": "channels.adminLogResults",
      "params": [
        {
          "name": "events",
          "type": "Vector<ChannelAdminLogEvent>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    {
      "id": 3926948580,
      "predicate": "channelAdminLogEventsFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "join",
          "type": "flags.0?true"
        },
        {
          "name": "leave",
          "type": "flags.1?true"
        },
        {
          "name": "invite",
          "type": "flags.2?true"
        },
        {
          "name": "ban",
          "type": "flags.3?true"
        },
        {
          "name": "unban",
          "type": "flags.4?true"
        },
        {
          "name": "kick",
          "type": "flags.5?true"
        },
        {
          "name": "unkick",
          "type": "flags.6?true"
        },
        {
          "name": "promote",
          "type": "flags.7?true"
        },
        {
          "name": "demote",
          "type": "flags.8?true"
        },
        {
          "name": "info",
          "type": "flags.9?true"
        },
        {
          "name": "settings",
          "type": "flags.10?true"
        },
        {
          "name": "pinned",
          "type": "flags.11?true"
        },
        {
          "name": "edit",
          "type": "flags.12?true"
        },
        {
          "name": "delete",
          "type": "flags.13?true"
        },
        {
          "name": "group_call",
          "type": "flags.14?true"
        },
        {
          "name": "invites",
          "type": "flags.15?true"
        },
        {
          "name": "send",
          "type": "flags.16?true"
        },
        {
          "name": "forums",
          "type": "flags.17?true"
        },
        {
          "name": "sub_extend",
          "type": "flags.18?true"
        }
      ],
      "type": "ChannelAdminLogEventsFilter"
    },
    {
      "id": 1558266229,
      "predicate": "popularContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "importers",
          "type": "int"
        }
      ],
      "type": "PopularContact"
    },
    {
      "id": 2660214483,
      "predicate": "messages.favedStickersNotModified",
      "params": [],
      "type": "messages.FavedStickers"
    },
    {
      "id": 750063767,
      "predicate": "messages.favedStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.FavedStickers"
    },
    {
      "id": 1189204285,
      "predicate": "recentMeUrlUnknown",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 3106671074,
      "predicate": "recentMeUrlUser",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 3000660434,
      "predicate": "recentMeUrlChat",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 3947431965,
      "predicate": "recentMeUrlChatInvite",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_invite",
          "type": "ChatInvite"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 3154794460,
      "predicate": "recentMeUrlStickerSet",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "set",
          "type": "StickerSetCovered"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 235081943,
      "predicate": "help.recentMeUrls",
      "params": [
        {
          "name": "urls",
          "type": "Vector<RecentMeUrl>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    {
      "id": 482797855,
      "predicate": "inputSingleMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.0?Vector<MessageEntity>"
        }
      ],
      "type": "InputSingleMedia"
    },
    {
      "id": 2801333330,
      "predicate": "webAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "domain",
          "type": "string"
        },
        {
          "name": "browser",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "WebAuthorization"
    },
    {
      "id": 3981887996,
      "predicate": "account.webAuthorizations",
      "params": [
        {
          "name": "authorizations",
          "type": "Vector<WebAuthorization>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.WebAuthorizations"
    },
    {
      "id": 2792792866,
      "predicate": "inputMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": 3134751637,
      "predicate": "inputMessageReplyTo",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": 2257003832,
      "predicate": "inputMessagePinned",
      "params": [],
      "type": "InputMessage"
    },
    {
      "id": 2902071934,
      "predicate": "inputMessageCallbackQuery",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "query_id",
          "type": "long"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": 4239064759,
      "predicate": "inputDialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputDialogPeer"
    },
    {
      "id": 1684014375,
      "predicate": "inputDialogPeerFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "InputDialogPeer"
    },
    {
      "id": 3849174789,
      "predicate": "dialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "DialogPeer"
    },
    {
      "id": 1363483106,
      "predicate": "dialogPeerFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "DialogPeer"
    },
    {
      "id": 223655517,
      "predicate": "messages.foundStickerSetsNotModified",
      "params": [],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": 2331024850,
      "predicate": "messages.foundStickerSets",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": 4087022428,
      "predicate": "fileHash",
      "params": [
        {
          "name": "offset",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "FileHash"
    },
    {
      "id": 1968737087,
      "predicate": "inputClientProxy",
      "params": [
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "InputClientProxy"
    },
    {
      "id": 3811614591,
      "predicate": "help.termsOfServiceUpdateEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": 686618977,
      "predicate": "help.termsOfServiceUpdate",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "terms_of_service",
          "type": "help.TermsOfService"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": 859091184,
      "predicate": "inputSecureFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "InputSecureFile"
    },
    {
      "id": 1399317950,
      "predicate": "inputSecureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputSecureFile"
    },
    {
      "id": 1679398724,
      "predicate": "secureFileEmpty",
      "params": [],
      "type": "SecureFile"
    },
    {
      "id": 2097791614,
      "predicate": "secureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "long"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureFile"
    },
    {
      "id": 2330640067,
      "predicate": "secureData",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureData"
    },
    {
      "id": 2103482845,
      "predicate": "securePlainPhone",
      "params": [
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    {
      "id": 569137759,
      "predicate": "securePlainEmail",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    {
      "id": 2636808675,
      "predicate": "secureValueTypePersonalDetails",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 1034709504,
      "predicate": "secureValueTypePassport",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 115615172,
      "predicate": "secureValueTypeDriverLicense",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2698015819,
      "predicate": "secureValueTypeIdentityCard",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2577698595,
      "predicate": "secureValueTypeInternalPassport",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 3420659238,
      "predicate": "secureValueTypeAddress",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 4231435598,
      "predicate": "secureValueTypeUtilityBill",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2299755533,
      "predicate": "secureValueTypeBankStatement",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2340959368,
      "predicate": "secureValueTypeRentalAgreement",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2581823594,
      "predicate": "secureValueTypePassportRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 3926060083,
      "predicate": "secureValueTypeTemporaryRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 3005262555,
      "predicate": "secureValueTypePhone",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2386339822,
      "predicate": "secureValueTypeEmail",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 411017418,
      "predicate": "secureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?SecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?SecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?SecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector<SecureFile>"
        },
        {
          "name": "files",
          "type": "flags.4?Vector<SecureFile>"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValue"
    },
    {
      "id": 3676426407,
      "predicate": "inputSecureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?InputSecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?InputSecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?InputSecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector<InputSecureFile>"
        },
        {
          "name": "files",
          "type": "flags.4?Vector<InputSecureFile>"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        }
      ],
      "type": "InputSecureValue"
    },
    {
      "id": 3978218928,
      "predicate": "secureValueHash",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValueHash"
    },
    {
      "id": 3903065049,
      "predicate": "secureValueErrorData",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "field",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 12467706,
      "predicate": "secureValueErrorFrontSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2257201829,
      "predicate": "secureValueErrorReverseSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 3845639894,
      "predicate": "secureValueErrorSelfie",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2054162547,
      "predicate": "secureValueErrorFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 1717706985,
      "predicate": "secureValueErrorFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector<bytes>"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2258466191,
      "predicate": "secureValueError",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2702460784,
      "predicate": "secureValueErrorTranslationFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 878931416,
      "predicate": "secureValueErrorTranslationFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector<bytes>"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 871426631,
      "predicate": "secureCredentialsEncrypted",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureCredentialsEncrypted"
    },
    {
      "id": 2905480408,
      "predicate": "account.authorizationForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "required_types",
          "type": "Vector<SecureRequiredType>"
        },
        {
          "name": "values",
          "type": "Vector<SecureValue>"
        },
        {
          "name": "errors",
          "type": "Vector<SecureValueError>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "privacy_policy_url",
          "type": "flags.0?string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    {
      "id": 2166326607,
      "predicate": "account.sentEmailCode",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "account.SentEmailCode"
    },
    {
      "id": 1722786150,
      "predicate": "help.deepLinkInfoEmpty",
      "params": [],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": 1783556146,
      "predicate": "help.deepLinkInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "update_app",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": 289586518,
      "predicate": "savedPhoneContact",
      "params": [
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "SavedContact"
    },
    {
      "id": 1304052993,
      "predicate": "account.takeout",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "account.Takeout"
    },
    {
      "id": 3562713238,
      "predicate": "passwordKdfAlgoUnknown",
      "params": [],
      "type": "PasswordKdfAlgo"
    },
    {
      "id": 982592842,
      "predicate": "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
      "params": [
        {
          "name": "salt1",
          "type": "bytes"
        },
        {
          "name": "salt2",
          "type": "bytes"
        },
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        }
      ],
      "type": "PasswordKdfAlgo"
    },
    {
      "id": 4883767,
      "predicate": "securePasswordKdfAlgoUnknown",
      "params": [],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": 3153255840,
      "predicate": "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": 2252807570,
      "predicate": "securePasswordKdfAlgoSHA512",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": 354925740,
      "predicate": "secureSecretSettings",
      "params": [
        {
          "name": "secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_secret",
          "type": "bytes"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureSecretSettings"
    },
    {
      "id": 2558588504,
      "predicate": "inputCheckPasswordEmpty",
      "params": [],
      "type": "InputCheckPasswordSRP"
    },
    {
      "id": 3531600002,
      "predicate": "inputCheckPasswordSRP",
      "params": [
        {
          "name": "srp_id",
          "type": "long"
        },
        {
          "name": "A",
          "type": "bytes"
        },
        {
          "name": "M1",
          "type": "bytes"
        }
      ],
      "type": "InputCheckPasswordSRP"
    },
    {
      "id": 2191366618,
      "predicate": "secureRequiredType",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "native_names",
          "type": "flags.0?true"
        },
        {
          "name": "selfie_required",
          "type": "flags.1?true"
        },
        {
          "name": "translation_required",
          "type": "flags.2?true"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        }
      ],
      "type": "SecureRequiredType"
    },
    {
      "id": 41187252,
      "predicate": "secureRequiredTypeOneOf",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureRequiredType>"
        }
      ],
      "type": "SecureRequiredType"
    },
    {
      "id": 3216634967,
      "predicate": "help.passportConfigNotModified",
      "params": [],
      "type": "help.PassportConfig"
    },
    {
      "id": 2694370991,
      "predicate": "help.passportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "countries_langs",
          "type": "DataJSON"
        }
      ],
      "type": "help.PassportConfig"
    },
    {
      "id": 488313413,
      "predicate": "inputAppEvent",
      "params": [
        {
          "name": "time",
          "type": "double"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "peer",
          "type": "long"
        },
        {
          "name": "data",
          "type": "JSONValue"
        }
      ],
      "type": "InputAppEvent"
    },
    {
      "id": 3235781593,
      "predicate": "jsonObjectValue",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "JSONValue"
        }
      ],
      "type": "JSONObjectValue"
    },
    {
      "id": 1064139624,
      "predicate": "jsonNull",
      "params": [],
      "type": "JSONValue"
    },
    {
      "id": 3342098026,
      "predicate": "jsonBool",
      "params": [
        {
          "name": "value",
          "type": "Bool"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 736157604,
      "predicate": "jsonNumber",
      "params": [
        {
          "name": "value",
          "type": "double"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 3072226938,
      "predicate": "jsonString",
      "params": [
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 4148447075,
      "predicate": "jsonArray",
      "params": [
        {
          "name": "value",
          "type": "Vector<JSONValue>"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 2579616925,
      "predicate": "jsonObject",
      "params": [
        {
          "name": "value",
          "type": "Vector<JSONObjectValue>"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 878078826,
      "predicate": "pageTableCell",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "header",
          "type": "flags.0?true"
        },
        {
          "name": "align_center",
          "type": "flags.3?true"
        },
        {
          "name": "align_right",
          "type": "flags.4?true"
        },
        {
          "name": "valign_middle",
          "type": "flags.5?true"
        },
        {
          "name": "valign_bottom",
          "type": "flags.6?true"
        },
        {
          "name": "text",
          "type": "flags.7?RichText"
        },
        {
          "name": "colspan",
          "type": "flags.1?int"
        },
        {
          "name": "rowspan",
          "type": "flags.2?int"
        }
      ],
      "type": "PageTableCell"
    },
    {
      "id": 3770729957,
      "predicate": "pageTableRow",
      "params": [
        {
          "name": "cells",
          "type": "Vector<PageTableCell>"
        }
      ],
      "type": "PageTableRow"
    },
    {
      "id": 1869903447,
      "predicate": "pageCaption",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "credit",
          "type": "RichText"
        }
      ],
      "type": "PageCaption"
    },
    {
      "id": 3106911949,
      "predicate": "pageListItemText",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListItem"
    },
    {
      "id": 635466748,
      "predicate": "pageListItemBlocks",
      "params": [
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        }
      ],
      "type": "PageListItem"
    },
    {
      "id": 1577484359,
      "predicate": "pageListOrderedItemText",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListOrderedItem"
    },
    {
      "id": 2564655414,
      "predicate": "pageListOrderedItemBlocks",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        }
      ],
      "type": "PageListOrderedItem"
    },
    {
      "id": 3012615176,
      "predicate": "pageRelatedArticle",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "description",
          "type": "flags.1?string"
        },
        {
          "name": "photo_id",
          "type": "flags.2?long"
        },
        {
          "name": "author",
          "type": "flags.3?string"
        },
        {
          "name": "published_date",
          "type": "flags.4?int"
        }
      ],
      "type": "PageRelatedArticle"
    },
    {
      "id": 2556788493,
      "predicate": "page",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "part",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.1?true"
        },
        {
          "name": "v2",
          "type": "flags.2?true"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        },
        {
          "name": "views",
          "type": "flags.3?int"
        }
      ],
      "type": "Page"
    },
    {
      "id": 2349199817,
      "predicate": "help.supportName",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "help.SupportName"
    },
    {
      "id": 4088278765,
      "predicate": "help.userInfoEmpty",
      "params": [],
      "type": "help.UserInfo"
    },
    {
      "id": 32192344,
      "predicate": "help.userInfo",
      "params": [
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": 4279689930,
      "predicate": "pollAnswer",
      "params": [
        {
          "name": "text",
          "type": "TextWithEntities"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "PollAnswer"
    },
    {
      "id": 1484026161,
      "predicate": "poll",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "closed",
          "type": "flags.0?true"
        },
        {
          "name": "public_voters",
          "type": "flags.1?true"
        },
        {
          "name": "multiple_choice",
          "type": "flags.2?true"
        },
        {
          "name": "quiz",
          "type": "flags.3?true"
        },
        {
          "name": "question",
          "type": "TextWithEntities"
        },
        {
          "name": "answers",
          "type": "Vector<PollAnswer>"
        },
        {
          "name": "close_period",
          "type": "flags.4?int"
        },
        {
          "name": "close_date",
          "type": "flags.5?int"
        }
      ],
      "type": "Poll"
    },
    {
      "id": 997055186,
      "predicate": "pollAnswerVoters",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chosen",
          "type": "flags.0?true"
        },
        {
          "name": "correct",
          "type": "flags.1?true"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "voters",
          "type": "int"
        }
      ],
      "type": "PollAnswerVoters"
    },
    {
      "id": 2061444128,
      "predicate": "pollResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "min",
          "type": "flags.0?true"
        },
        {
          "name": "results",
          "type": "flags.1?Vector<PollAnswerVoters>"
        },
        {
          "name": "total_voters",
          "type": "flags.2?int"
        },
        {
          "name": "recent_voters",
          "type": "flags.3?Vector<Peer>"
        },
        {
          "name": "solution",
          "type": "flags.4?string"
        },
        {
          "name": "solution_entities",
          "type": "flags.4?Vector<MessageEntity>"
        }
      ],
      "type": "PollResults"
    },
    {
      "id": 4030849616,
      "predicate": "chatOnlines",
      "params": [
        {
          "name": "onlines",
          "type": "int"
        }
      ],
      "type": "ChatOnlines"
    },
    {
      "id": 1202287072,
      "predicate": "statsURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "StatsURL"
    },
    {
      "id": 1605510357,
      "predicate": "chatAdminRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "change_info",
          "type": "flags.0?true"
        },
        {
          "name": "post_messages",
          "type": "flags.1?true"
        },
        {
          "name": "edit_messages",
          "type": "flags.2?true"
        },
        {
          "name": "delete_messages",
          "type": "flags.3?true"
        },
        {
          "name": "ban_users",
          "type": "flags.4?true"
        },
        {
          "name": "invite_users",
          "type": "flags.5?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.7?true"
        },
        {
          "name": "add_admins",
          "type": "flags.9?true"
        },
        {
          "name": "anonymous",
          "type": "flags.10?true"
        },
        {
          "name": "manage_call",
          "type": "flags.11?true"
        },
        {
          "name": "other",
          "type": "flags.12?true"
        },
        {
          "name": "manage_topics",
          "type": "flags.13?true"
        },
        {
          "name": "post_stories",
          "type": "flags.14?true"
        },
        {
          "name": "edit_stories",
          "type": "flags.15?true"
        },
        {
          "name": "delete_stories",
          "type": "flags.16?true"
        }
      ],
      "type": "ChatAdminRights"
    },
    {
      "id": 2668758040,
      "predicate": "chatBannedRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "view_messages",
          "type": "flags.0?true"
        },
        {
          "name": "send_messages",
          "type": "flags.1?true"
        },
        {
          "name": "send_media",
          "type": "flags.2?true"
        },
        {
          "name": "send_stickers",
          "type": "flags.3?true"
        },
        {
          "name": "send_gifs",
          "type": "flags.4?true"
        },
        {
          "name": "send_games",
          "type": "flags.5?true"
        },
        {
          "name": "send_inline",
          "type": "flags.6?true"
        },
        {
          "name": "embed_links",
          "type": "flags.7?true"
        },
        {
          "name": "send_polls",
          "type": "flags.8?true"
        },
        {
          "name": "change_info",
          "type": "flags.10?true"
        },
        {
          "name": "invite_users",
          "type": "flags.15?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.17?true"
        },
        {
          "name": "manage_topics",
          "type": "flags.18?true"
        },
        {
          "name": "send_photos",
          "type": "flags.19?true"
        },
        {
          "name": "send_videos",
          "type": "flags.20?true"
        },
        {
          "name": "send_roundvideos",
          "type": "flags.21?true"
        },
        {
          "name": "send_audios",
          "type": "flags.22?true"
        },
        {
          "name": "send_voices",
          "type": "flags.23?true"
        },
        {
          "name": "send_docs",
          "type": "flags.24?true"
        },
        {
          "name": "send_plain",
          "type": "flags.25?true"
        },
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "ChatBannedRights"
    },
    {
      "id": 3861952889,
      "predicate": "inputWallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": 1913199744,
      "predicate": "inputWallPaperSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": 2524595758,
      "predicate": "inputWallPaperNoFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": 471437699,
      "predicate": "account.wallPapersNotModified",
      "params": [],
      "type": "account.WallPapers"
    },
    {
      "id": 3452142988,
      "predicate": "account.wallPapers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "wallpapers",
          "type": "Vector<WallPaper>"
        }
      ],
      "type": "account.WallPapers"
    },
    {
      "id": 2904898936,
      "predicate": "codeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "allow_flashcall",
          "type": "flags.0?true"
        },
        {
          "name": "current_number",
          "type": "flags.1?true"
        },
        {
          "name": "allow_app_hash",
          "type": "flags.4?true"
        },
        {
          "name": "allow_missed_call",
          "type": "flags.5?true"
        },
        {
          "name": "allow_firebase",
          "type": "flags.7?true"
        },
        {
          "name": "unknown_number",
          "type": "flags.9?true"
        },
        {
          "name": "logout_tokens",
          "type": "flags.6?Vector<bytes>"
        },
        {
          "name": "token",
          "type": "flags.8?string"
        },
        {
          "name": "app_sandbox",
          "type": "flags.8?Bool"
        }
      ],
      "type": "CodeSettings"
    },
    {
      "id": 925826256,
      "predicate": "wallPaperSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blur",
          "type": "flags.1?true"
        },
        {
          "name": "motion",
          "type": "flags.2?true"
        },
        {
          "name": "background_color",
          "type": "flags.0?int"
        },
        {
          "name": "second_background_color",
          "type": "flags.4?int"
        },
        {
          "name": "third_background_color",
          "type": "flags.5?int"
        },
        {
          "name": "fourth_background_color",
          "type": "flags.6?int"
        },
        {
          "name": "intensity",
          "type": "flags.3?int"
        },
        {
          "name": "rotation",
          "type": "flags.4?int"
        },
        {
          "name": "emoticon",
          "type": "flags.7?string"
        }
      ],
      "type": "WallPaperSettings"
    },
    {
      "id": 3131405864,
      "predicate": "autoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "disabled",
          "type": "flags.0?true"
        },
        {
          "name": "video_preload_large",
          "type": "flags.1?true"
        },
        {
          "name": "audio_preload_next",
          "type": "flags.2?true"
        },
        {
          "name": "phonecalls_less_data",
          "type": "flags.3?true"
        },
        {
          "name": "stories_preload",
          "type": "flags.4?true"
        },
        {
          "name": "photo_size_max",
          "type": "int"
        },
        {
          "name": "video_size_max",
          "type": "long"
        },
        {
          "name": "file_size_max",
          "type": "long"
        },
        {
          "name": "video_upload_maxbitrate",
          "type": "int"
        },
        {
          "name": "small_queue_active_operations_max",
          "type": "int"
        },
        {
          "name": "large_queue_active_operations_max",
          "type": "int"
        }
      ],
      "type": "AutoDownloadSettings"
    },
    {
      "id": 1674235686,
      "predicate": "account.autoDownloadSettings",
      "params": [
        {
          "name": "low",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "medium",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "high",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "account.AutoDownloadSettings"
    },
    {
      "id": 3585325561,
      "predicate": "emojiKeyword",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiKeyword"
    },
    {
      "id": 594408994,
      "predicate": "emojiKeywordDeleted",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiKeyword"
    },
    {
      "id": 1556570557,
      "predicate": "emojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "keywords",
          "type": "Vector<EmojiKeyword>"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": 2775937949,
      "predicate": "emojiURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    {
      "id": 3019592545,
      "predicate": "emojiLanguage",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiLanguage"
    },
    {
      "id": 4283715173,
      "predicate": "folder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "autofill_new_broadcasts",
          "type": "flags.0?true"
        },
        {
          "name": "autofill_public_groups",
          "type": "flags.1?true"
        },
        {
          "name": "autofill_new_correspondents",
          "type": "flags.2?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.3?ChatPhoto"
        }
      ],
      "type": "Folder"
    },
    {
      "id": 4224893590,
      "predicate": "inputFolderPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "InputFolderPeer"
    },
    {
      "id": 3921323624,
      "predicate": "folderPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "FolderPeer"
    },
    {
      "id": 3896830975,
      "predicate": "messages.searchCounter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.SearchCounter"
    },
    {
      "id": 2463316494,
      "predicate": "urlAuthResultRequest",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "request_write_access",
          "type": "flags.0?true"
        },
        {
          "name": "bot",
          "type": "User"
        },
        {
          "name": "domain",
          "type": "string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 2408320590,
      "predicate": "urlAuthResultAccepted",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 2849430303,
      "predicate": "urlAuthResultDefault",
      "params": [],
      "type": "UrlAuthResult"
    },
    {
      "id": 3216354699,
      "predicate": "channelLocationEmpty",
      "params": [],
      "type": "ChannelLocation"
    },
    {
      "id": 547062491,
      "predicate": "channelLocation",
      "params": [
        {
          "name": "geo_point",
          "type": "GeoPoint"
        },
        {
          "name": "address",
          "type": "string"
        }
      ],
      "type": "ChannelLocation"
    },
    {
      "id": 3393592157,
      "predicate": "peerLocated",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "distance",
          "type": "int"
        }
      ],
      "type": "PeerLocated"
    },
    {
      "id": 4176226379,
      "predicate": "peerSelfLocated",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "PeerLocated"
    },
    {
      "id": 3497176244,
      "predicate": "restrictionReason",
      "params": [
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "reason",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "RestrictionReason"
    },
    {
      "id": 1012306921,
      "predicate": "inputTheme",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputTheme"
    },
    {
      "id": 4119399921,
      "predicate": "inputThemeSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputTheme"
    },
    {
      "id": 2685298646,
      "predicate": "theme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "for_chat",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "document",
          "type": "flags.2?Document"
        },
        {
          "name": "settings",
          "type": "flags.3?Vector<ThemeSettings>"
        },
        {
          "name": "emoticon",
          "type": "flags.6?string"
        },
        {
          "name": "installs_count",
          "type": "flags.4?int"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 4095653410,
      "predicate": "account.themesNotModified",
      "params": [],
      "type": "account.Themes"
    },
    {
      "id": 2587724909,
      "predicate": "account.themes",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "themes",
          "type": "Vector<Theme>"
        }
      ],
      "type": "account.Themes"
    },
    {
      "id": 1654593920,
      "predicate": "auth.loginToken",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 110008598,
      "predicate": "auth.loginTokenMigrateTo",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 957176926,
      "predicate": "auth.loginTokenSuccess",
      "params": [
        {
          "name": "authorization",
          "type": "auth.Authorization"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 1474462241,
      "predicate": "account.contentSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sensitive_enabled",
          "type": "flags.0?true"
        },
        {
          "name": "sensitive_can_change",
          "type": "flags.1?true"
        }
      ],
      "type": "account.ContentSettings"
    },
    {
      "id": 2837970629,
      "predicate": "messages.inactiveChats",
      "params": [
        {
          "name": "dates",
          "type": "Vector<int>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.InactiveChats"
    },
    {
      "id": 3282117730,
      "predicate": "baseThemeClassic",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 4225242760,
      "predicate": "baseThemeDay",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 3081969320,
      "predicate": "baseThemeNight",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 1834973166,
      "predicate": "baseThemeTinted",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 1527845466,
      "predicate": "baseThemeArctic",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 2413711439,
      "predicate": "inputThemeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message_colors_animated",
          "type": "flags.2?true"
        },
        {
          "name": "base_theme",
          "type": "BaseTheme"
        },
        {
          "name": "accent_color",
          "type": "int"
        },
        {
          "name": "outbox_accent_color",
          "type": "flags.3?int"
        },
        {
          "name": "message_colors",
          "type": "flags.0?Vector<int>"
        },
        {
          "name": "wallpaper",
          "type": "flags.1?InputWallPaper"
        },
        {
          "name": "wallpaper_settings",
          "type": "flags.1?WallPaperSettings"
        }
      ],
      "type": "InputThemeSettings"
    },
    {
      "id": 4200117972,
      "predicate": "themeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message_colors_animated",
          "type": "flags.2?true"
        },
        {
          "name": "base_theme",
          "type": "BaseTheme"
        },
        {
          "name": "accent_color",
          "type": "int"
        },
        {
          "name": "outbox_accent_color",
          "type": "flags.3?int"
        },
        {
          "name": "message_colors",
          "type": "flags.0?Vector<int>"
        },
        {
          "name": "wallpaper",
          "type": "flags.1?WallPaper"
        }
      ],
      "type": "ThemeSettings"
    },
    {
      "id": 1421174295,
      "predicate": "webPageAttributeTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "documents",
          "type": "flags.0?Vector<Document>"
        },
        {
          "name": "settings",
          "type": "flags.1?ThemeSettings"
        }
      ],
      "type": "WebPageAttribute"
    },
    {
      "id": 781501415,
      "predicate": "webPageAttributeStory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "story",
          "type": "flags.0?StoryItem"
        }
      ],
      "type": "WebPageAttribute"
    },
    {
      "id": 1355547603,
      "predicate": "webPageAttributeStickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "emojis",
          "type": "flags.0?true"
        },
        {
          "name": "text_color",
          "type": "flags.1?true"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "WebPageAttribute"
    },
    {
      "id": 3480186296,
      "predicate": "webPageAttributeUniqueStarGift",
      "params": [
        {
          "name": "gift",
          "type": "StarGift"
        }
      ],
      "type": "WebPageAttribute"
    },
    {
      "id": 1218005070,
      "predicate": "messages.votesList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "votes",
          "type": "Vector<MessagePeerVote>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        }
      ],
      "type": "messages.VotesList"
    },
    {
      "id": 4117234314,
      "predicate": "bankCardOpenUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "BankCardOpenUrl"
    },
    {
      "id": 1042605427,
      "predicate": "payments.bankCardData",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "open_urls",
          "type": "Vector<BankCardOpenUrl>"
        }
      ],
      "type": "payments.BankCardData"
    },
    {
      "id": 2856789585,
      "predicate": "dialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "contacts",
          "type": "flags.0?true"
        },
        {
          "name": "non_contacts",
          "type": "flags.1?true"
        },
        {
          "name": "groups",
          "type": "flags.2?true"
        },
        {
          "name": "broadcasts",
          "type": "flags.3?true"
        },
        {
          "name": "bots",
          "type": "flags.4?true"
        },
        {
          "name": "exclude_muted",
          "type": "flags.11?true"
        },
        {
          "name": "exclude_read",
          "type": "flags.12?true"
        },
        {
          "name": "exclude_archived",
          "type": "flags.13?true"
        },
        {
          "name": "title_noanimate",
          "type": "flags.28?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "TextWithEntities"
        },
        {
          "name": "emoticon",
          "type": "flags.25?string"
        },
        {
          "name": "color",
          "type": "flags.27?int"
        },
        {
          "name": "pinned_peers",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "include_peers",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "exclude_peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "DialogFilter"
    },
    {
      "id": 909284270,
      "predicate": "dialogFilterDefault",
      "params": [],
      "type": "DialogFilter"
    },
    {
      "id": 2522053591,
      "predicate": "dialogFilterChatlist",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_my_invites",
          "type": "flags.26?true"
        },
        {
          "name": "title_noanimate",
          "type": "flags.28?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "TextWithEntities"
        },
        {
          "name": "emoticon",
          "type": "flags.25?string"
        },
        {
          "name": "color",
          "type": "flags.27?int"
        },
        {
          "name": "pinned_peers",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "include_peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "DialogFilter"
    },
    {
      "id": 2004110666,
      "predicate": "dialogFilterSuggested",
      "params": [
        {
          "name": "filter",
          "type": "DialogFilter"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "DialogFilterSuggested"
    },
    {
      "id": 3057118639,
      "predicate": "statsDateRangeDays",
      "params": [
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        }
      ],
      "type": "StatsDateRangeDays"
    },
    {
      "id": 3410210014,
      "predicate": "statsAbsValueAndPrev",
      "params": [
        {
          "name": "current",
          "type": "double"
        },
        {
          "name": "previous",
          "type": "double"
        }
      ],
      "type": "StatsAbsValueAndPrev"
    },
    {
      "id": 3419287520,
      "predicate": "statsPercentValue",
      "params": [
        {
          "name": "part",
          "type": "double"
        },
        {
          "name": "total",
          "type": "double"
        }
      ],
      "type": "StatsPercentValue"
    },
    {
      "id": 1244130093,
      "predicate": "statsGraphAsync",
      "params": [
        {
          "name": "token",
          "type": "string"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 3202127906,
      "predicate": "statsGraphError",
      "params": [
        {
          "name": "error",
          "type": "string"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 2393138358,
      "predicate": "statsGraph",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "json",
          "type": "DataJSON"
        },
        {
          "name": "zoom_token",
          "type": "flags.0?string"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 963421692,
      "predicate": "stats.broadcastStats",
      "params": [
        {
          "name": "period",
          "type": "StatsDateRangeDays"
        },
        {
          "name": "followers",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "views_per_post",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "shares_per_post",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "reactions_per_post",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "views_per_story",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "shares_per_story",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "reactions_per_story",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "enabled_notifications",
          "type": "StatsPercentValue"
        },
        {
          "name": "growth_graph",
          "type": "StatsGraph"
        },
        {
          "name": "followers_graph",
          "type": "StatsGraph"
        },
        {
          "name": "mute_graph",
          "type": "StatsGraph"
        },
        {
          "name": "top_hours_graph",
          "type": "StatsGraph"
        },
        {
          "name": "interactions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "iv_interactions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "views_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "new_followers_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "languages_graph",
          "type": "StatsGraph"
        },
        {
          "name": "reactions_by_emotion_graph",
          "type": "StatsGraph"
        },
        {
          "name": "story_interactions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "story_reactions_by_emotion_graph",
          "type": "StatsGraph"
        },
        {
          "name": "recent_posts_interactions",
          "type": "Vector<PostInteractionCounters>"
        }
      ],
      "type": "stats.BroadcastStats"
    },
    {
      "id": 2566302837,
      "predicate": "help.promoDataEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.PromoData"
    },
    {
      "id": 2352576831,
      "predicate": "help.promoData",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "proxy",
          "type": "flags.0?true"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "psa_type",
          "type": "flags.1?string"
        },
        {
          "name": "psa_message",
          "type": "flags.2?string"
        }
      ],
      "type": "help.PromoData"
    },
    {
      "id": 3727929492,
      "predicate": "videoSize",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "video_start_ts",
          "type": "flags.0?double"
        }
      ],
      "type": "VideoSize"
    },
    {
      "id": 4166795580,
      "predicate": "videoSizeEmojiMarkup",
      "params": [
        {
          "name": "emoji_id",
          "type": "long"
        },
        {
          "name": "background_colors",
          "type": "Vector<int>"
        }
      ],
      "type": "VideoSize"
    },
    {
      "id": 228623102,
      "predicate": "videoSizeStickerMarkup",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "sticker_id",
          "type": "long"
        },
        {
          "name": "background_colors",
          "type": "Vector<int>"
        }
      ],
      "type": "VideoSize"
    },
    {
      "id": 2634330011,
      "predicate": "statsGroupTopPoster",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "messages",
          "type": "int"
        },
        {
          "name": "avg_chars",
          "type": "int"
        }
      ],
      "type": "StatsGroupTopPoster"
    },
    {
      "id": 3612888199,
      "predicate": "statsGroupTopAdmin",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "deleted",
          "type": "int"
        },
        {
          "name": "kicked",
          "type": "int"
        },
        {
          "name": "banned",
          "type": "int"
        }
      ],
      "type": "StatsGroupTopAdmin"
    },
    {
      "id": 1398765469,
      "predicate": "statsGroupTopInviter",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "invitations",
          "type": "int"
        }
      ],
      "type": "StatsGroupTopInviter"
    },
    {
      "id": 4018141462,
      "predicate": "stats.megagroupStats",
      "params": [
        {
          "name": "period",
          "type": "StatsDateRangeDays"
        },
        {
          "name": "members",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "messages",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "viewers",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "posters",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "growth_graph",
          "type": "StatsGraph"
        },
        {
          "name": "members_graph",
          "type": "StatsGraph"
        },
        {
          "name": "new_members_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "languages_graph",
          "type": "StatsGraph"
        },
        {
          "name": "messages_graph",
          "type": "StatsGraph"
        },
        {
          "name": "actions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "top_hours_graph",
          "type": "StatsGraph"
        },
        {
          "name": "weekdays_graph",
          "type": "StatsGraph"
        },
        {
          "name": "top_posters",
          "type": "Vector<StatsGroupTopPoster>"
        },
        {
          "name": "top_admins",
          "type": "Vector<StatsGroupTopAdmin>"
        },
        {
          "name": "top_inviters",
          "type": "Vector<StatsGroupTopInviter>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "stats.MegagroupStats"
    },
    {
      "id": 1934380235,
      "predicate": "globalPrivacySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "archive_and_mute_new_noncontact_peers",
          "type": "flags.0?true"
        },
        {
          "name": "keep_archived_unmuted",
          "type": "flags.1?true"
        },
        {
          "name": "keep_archived_folders",
          "type": "flags.2?true"
        },
        {
          "name": "hide_read_marks",
          "type": "flags.3?true"
        },
        {
          "name": "new_noncontact_peers_require_premium",
          "type": "flags.4?true"
        }
      ],
      "type": "GlobalPrivacySettings"
    },
    {
      "id": 1107543535,
      "predicate": "help.countryCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "country_code",
          "type": "string"
        },
        {
          "name": "prefixes",
          "type": "flags.0?Vector<string>"
        },
        {
          "name": "patterns",
          "type": "flags.1?Vector<string>"
        }
      ],
      "type": "help.CountryCode"
    },
    {
      "id": 3280440867,
      "predicate": "help.country",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "hidden",
          "type": "flags.0?true"
        },
        {
          "name": "iso2",
          "type": "string"
        },
        {
          "name": "default_name",
          "type": "string"
        },
        {
          "name": "name",
          "type": "flags.1?string"
        },
        {
          "name": "country_codes",
          "type": "Vector<help.CountryCode>"
        }
      ],
      "type": "help.Country"
    },
    {
      "id": 2479628082,
      "predicate": "help.countriesListNotModified",
      "params": [],
      "type": "help.CountriesList"
    },
    {
      "id": 2278585758,
      "predicate": "help.countriesList",
      "params": [
        {
          "name": "countries",
          "type": "Vector<help.Country>"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.CountriesList"
    },
    {
      "id": 1163625789,
      "predicate": "messageViews",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "views",
          "type": "flags.0?int"
        },
        {
          "name": "forwards",
          "type": "flags.1?int"
        },
        {
          "name": "replies",
          "type": "flags.2?MessageReplies"
        }
      ],
      "type": "MessageViews"
    },
    {
      "id": 3066361155,
      "predicate": "messages.messageViews",
      "params": [
        {
          "name": "views",
          "type": "Vector<MessageViews>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.MessageViews"
    },
    {
      "id": 2788431746,
      "predicate": "messages.discussionMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "max_id",
          "type": "flags.0?int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "flags.1?int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "flags.2?int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.DiscussionMessage"
    },
    {
      "id": 2948336091,
      "predicate": "messageReplyHeader",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reply_to_scheduled",
          "type": "flags.2?true"
        },
        {
          "name": "forum_topic",
          "type": "flags.3?true"
        },
        {
          "name": "quote",
          "type": "flags.9?true"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.4?int"
        },
        {
          "name": "reply_to_peer_id",
          "type": "flags.0?Peer"
        },
        {
          "name": "reply_from",
          "type": "flags.5?MessageFwdHeader"
        },
        {
          "name": "reply_media",
          "type": "flags.8?MessageMedia"
        },
        {
          "name": "reply_to_top_id",
          "type": "flags.1?int"
        },
        {
          "name": "quote_text",
          "type": "flags.6?string"
        },
        {
          "name": "quote_entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "quote_offset",
          "type": "flags.10?int"
        }
      ],
      "type": "MessageReplyHeader"
    },
    {
      "id": 240843065,
      "predicate": "messageReplyStoryHeader",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "story_id",
          "type": "int"
        }
      ],
      "type": "MessageReplyHeader"
    },
    {
      "id": 2211844034,
      "predicate": "messageReplies",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "comments",
          "type": "flags.0?true"
        },
        {
          "name": "replies",
          "type": "int"
        },
        {
          "name": "replies_pts",
          "type": "int"
        },
        {
          "name": "recent_repliers",
          "type": "flags.1?Vector<Peer>"
        },
        {
          "name": "channel_id",
          "type": "flags.0?long"
        },
        {
          "name": "max_id",
          "type": "flags.2?int"
        },
        {
          "name": "read_max_id",
          "type": "flags.3?int"
        }
      ],
      "type": "MessageReplies"
    },
    {
      "id": 3908927508,
      "predicate": "peerBlocked",
      "params": [
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "PeerBlocked"
    },
    {
      "id": 2145983508,
      "predicate": "stats.messageStats",
      "params": [
        {
          "name": "views_graph",
          "type": "StatsGraph"
        },
        {
          "name": "reactions_by_emotion_graph",
          "type": "StatsGraph"
        }
      ],
      "type": "stats.MessageStats"
    },
    {
      "id": 2004925620,
      "predicate": "groupCallDiscarded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "duration",
          "type": "int"
        }
      ],
      "type": "GroupCall"
    },
    {
      "id": 3455636451,
      "predicate": "groupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "join_muted",
          "type": "flags.1?true"
        },
        {
          "name": "can_change_join_muted",
          "type": "flags.2?true"
        },
        {
          "name": "join_date_asc",
          "type": "flags.6?true"
        },
        {
          "name": "schedule_start_subscribed",
          "type": "flags.8?true"
        },
        {
          "name": "can_start_video",
          "type": "flags.9?true"
        },
        {
          "name": "record_video_active",
          "type": "flags.11?true"
        },
        {
          "name": "rtmp_stream",
          "type": "flags.12?true"
        },
        {
          "name": "listeners_hidden",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.3?string"
        },
        {
          "name": "stream_dc_id",
          "type": "flags.4?int"
        },
        {
          "name": "record_start_date",
          "type": "flags.5?int"
        },
        {
          "name": "schedule_date",
          "type": "flags.7?int"
        },
        {
          "name": "unmuted_video_count",
          "type": "flags.10?int"
        },
        {
          "name": "unmuted_video_limit",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "conference_from_call",
          "type": "flags.14?long"
        }
      ],
      "type": "GroupCall"
    },
    {
      "id": 3635053583,
      "predicate": "inputGroupCall",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputGroupCall"
    },
    {
      "id": 3953538814,
      "predicate": "groupCallParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "muted",
          "type": "flags.0?true"
        },
        {
          "name": "left",
          "type": "flags.1?true"
        },
        {
          "name": "can_self_unmute",
          "type": "flags.2?true"
        },
        {
          "name": "just_joined",
          "type": "flags.4?true"
        },
        {
          "name": "versioned",
          "type": "flags.5?true"
        },
        {
          "name": "min",
          "type": "flags.8?true"
        },
        {
          "name": "muted_by_you",
          "type": "flags.9?true"
        },
        {
          "name": "volume_by_admin",
          "type": "flags.10?true"
        },
        {
          "name": "self",
          "type": "flags.12?true"
        },
        {
          "name": "video_joined",
          "type": "flags.15?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "active_date",
          "type": "flags.3?int"
        },
        {
          "name": "source",
          "type": "int"
        },
        {
          "name": "volume",
          "type": "flags.7?int"
        },
        {
          "name": "about",
          "type": "flags.11?string"
        },
        {
          "name": "raise_hand_rating",
          "type": "flags.13?long"
        },
        {
          "name": "video",
          "type": "flags.6?GroupCallParticipantVideo"
        },
        {
          "name": "presentation",
          "type": "flags.14?GroupCallParticipantVideo"
        }
      ],
      "type": "GroupCallParticipant"
    },
    {
      "id": 2658302637,
      "predicate": "phone.groupCall",
      "params": [
        {
          "name": "call",
          "type": "GroupCall"
        },
        {
          "name": "participants",
          "type": "Vector<GroupCallParticipant>"
        },
        {
          "name": "participants_next_offset",
          "type": "string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "phone.GroupCall"
    },
    {
      "id": 4101460406,
      "predicate": "phone.groupParticipants",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector<GroupCallParticipant>"
        },
        {
          "name": "next_offset",
          "type": "string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "phone.GroupParticipants"
    },
    {
      "id": 813821341,
      "predicate": "inlineQueryPeerTypeSameBotPM",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 2201751468,
      "predicate": "inlineQueryPeerTypePM",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 3613836554,
      "predicate": "inlineQueryPeerTypeChat",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 1589952067,
      "predicate": "inlineQueryPeerTypeMegagroup",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 1664413338,
      "predicate": "inlineQueryPeerTypeBroadcast",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 238759180,
      "predicate": "inlineQueryPeerTypeBotPM",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 375566091,
      "predicate": "messages.historyImport",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "messages.HistoryImport"
    },
    {
      "id": 1578088377,
      "predicate": "messages.historyImportParsed",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pm",
          "type": "flags.0?true"
        },
        {
          "name": "group",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        }
      ],
      "type": "messages.HistoryImportParsed"
    },
    {
      "id": 4019011180,
      "predicate": "messages.affectedFoundMessages",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedFoundMessages"
    },
    {
      "id": 2354765785,
      "predicate": "chatInviteImporter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "requested",
          "type": "flags.0?true"
        },
        {
          "name": "via_chatlist",
          "type": "flags.3?true"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "about",
          "type": "flags.2?string"
        },
        {
          "name": "approved_by",
          "type": "flags.1?long"
        }
      ],
      "type": "ChatInviteImporter"
    },
    {
      "id": 3183881676,
      "predicate": "messages.exportedChatInvites",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "invites",
          "type": "Vector<ExportedChatInvite>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ExportedChatInvites"
    },
    {
      "id": 410107472,
      "predicate": "messages.exportedChatInvite",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 572915951,
      "predicate": "messages.exportedChatInviteReplaced",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "new_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 2176233482,
      "predicate": "messages.chatInviteImporters",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "importers",
          "type": "Vector<ChatInviteImporter>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ChatInviteImporters"
    },
    {
      "id": 4075613987,
      "predicate": "chatAdminWithInvites",
      "params": [
        {
          "name": "admin_id",
          "type": "long"
        },
        {
          "name": "invites_count",
          "type": "int"
        },
        {
          "name": "revoked_invites_count",
          "type": "int"
        }
      ],
      "type": "ChatAdminWithInvites"
    },
    {
      "id": 3063640791,
      "predicate": "messages.chatAdminsWithInvites",
      "params": [
        {
          "name": "admins",
          "type": "Vector<ChatAdminWithInvites>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ChatAdminsWithInvites"
    },
    {
      "id": 2723014423,
      "predicate": "messages.checkedHistoryImportPeer",
      "params": [
        {
          "name": "confirm_text",
          "type": "string"
        }
      ],
      "type": "messages.CheckedHistoryImportPeer"
    },
    {
      "id": 2951045695,
      "predicate": "phone.joinAsPeers",
      "params": [
        {
          "name": "peers",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "phone.JoinAsPeers"
    },
    {
      "id": 541839704,
      "predicate": "phone.exportedGroupCallInvite",
      "params": [
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "phone.ExportedGroupCallInvite"
    },
    {
      "id": 3702593719,
      "predicate": "groupCallParticipantVideoSourceGroup",
      "params": [
        {
          "name": "semantics",
          "type": "string"
        },
        {
          "name": "sources",
          "type": "Vector<int>"
        }
      ],
      "type": "GroupCallParticipantVideoSourceGroup"
    },
    {
      "id": 1735736008,
      "predicate": "groupCallParticipantVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "paused",
          "type": "flags.0?true"
        },
        {
          "name": "endpoint",
          "type": "string"
        },
        {
          "name": "source_groups",
          "type": "Vector<GroupCallParticipantVideoSourceGroup>"
        },
        {
          "name": "audio_source",
          "type": "flags.1?int"
        }
      ],
      "type": "GroupCallParticipantVideo"
    },
    {
      "id": 2248056895,
      "predicate": "stickers.suggestedShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "stickers.SuggestedShortName"
    },
    {
      "id": 795652779,
      "predicate": "botCommandScopeDefault",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 1011811544,
      "predicate": "botCommandScopeUsers",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 1877059713,
      "predicate": "botCommandScopeChats",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 3114950762,
      "predicate": "botCommandScopeChatAdmins",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 3684534653,
      "predicate": "botCommandScopePeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "BotCommandScope"
    },
    {
      "id": 1071145937,
      "predicate": "botCommandScopePeerAdmins",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "BotCommandScope"
    },
    {
      "id": 169026035,
      "predicate": "botCommandScopePeerUser",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "BotCommandScope"
    },
    {
      "id": 3816265825,
      "predicate": "account.resetPasswordFailedWait",
      "params": [
        {
          "name": "retry_date",
          "type": "int"
        }
      ],
      "type": "account.ResetPasswordResult"
    },
    {
      "id": 3924819069,
      "predicate": "account.resetPasswordRequestedWait",
      "params": [
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "account.ResetPasswordResult"
    },
    {
      "id": 3911636542,
      "predicate": "account.resetPasswordOk",
      "params": [],
      "type": "account.ResetPasswordResult"
    },
    {
      "id": 1301522832,
      "predicate": "sponsoredMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "recommended",
          "type": "flags.5?true"
        },
        {
          "name": "can_report",
          "type": "flags.12?true"
        },
        {
          "name": "random_id",
          "type": "bytes"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "photo",
          "type": "flags.6?Photo"
        },
        {
          "name": "media",
          "type": "flags.14?MessageMedia"
        },
        {
          "name": "color",
          "type": "flags.13?PeerColor"
        },
        {
          "name": "button_text",
          "type": "string"
        },
        {
          "name": "sponsor_info",
          "type": "flags.7?string"
        },
        {
          "name": "additional_info",
          "type": "flags.8?string"
        }
      ],
      "type": "SponsoredMessage"
    },
    {
      "id": 3387825543,
      "predicate": "messages.sponsoredMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "posts_between",
          "type": "flags.0?int"
        },
        {
          "name": "messages",
          "type": "Vector<SponsoredMessage>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.SponsoredMessages"
    },
    {
      "id": 406407439,
      "predicate": "messages.sponsoredMessagesEmpty",
      "params": [],
      "type": "messages.SponsoredMessages"
    },
    {
      "id": 3383776159,
      "predicate": "searchResultsCalendarPeriod",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "min_msg_id",
          "type": "int"
        },
        {
          "name": "max_msg_id",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "SearchResultsCalendarPeriod"
    },
    {
      "id": 343859772,
      "predicate": "messages.searchResultsCalendar",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.0?true"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "min_msg_id",
          "type": "int"
        },
        {
          "name": "offset_id_offset",
          "type": "flags.1?int"
        },
        {
          "name": "periods",
          "type": "Vector<SearchResultsCalendarPeriod>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.SearchResultsCalendar"
    },
    {
      "id": 2137295719,
      "predicate": "searchResultPosition",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "SearchResultsPosition"
    },
    {
      "id": 1404185519,
      "predicate": "messages.searchResultsPositions",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "positions",
          "type": "Vector<SearchResultsPosition>"
        }
      ],
      "type": "messages.SearchResultsPositions"
    },
    {
      "id": 4103516358,
      "predicate": "channels.sendAsPeers",
      "params": [
        {
          "name": "peers",
          "type": "Vector<SendAsPeer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.SendAsPeers"
    },
    {
      "id": 997004590,
      "predicate": "users.userFull",
      "params": [
        {
          "name": "full_user",
          "type": "UserFull"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "users.UserFull"
    },
    {
      "id": 1753266509,
      "predicate": "messages.peerSettings",
      "params": [
        {
          "name": "settings",
          "type": "PeerSettings"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.PeerSettings"
    },
    {
      "id": 3282207583,
      "predicate": "auth.loggedOut",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "future_auth_token",
          "type": "flags.0?bytes"
        }
      ],
      "type": "auth.LoggedOut"
    },
    {
      "id": 2748435328,
      "predicate": "reactionCount",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chosen_order",
          "type": "flags.0?int"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "ReactionCount"
    },
    {
      "id": 171155211,
      "predicate": "messageReactions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "min",
          "type": "flags.0?true"
        },
        {
          "name": "can_see_list",
          "type": "flags.2?true"
        },
        {
          "name": "reactions_as_tags",
          "type": "flags.3?true"
        },
        {
          "name": "results",
          "type": "Vector<ReactionCount>"
        },
        {
          "name": "recent_reactions",
          "type": "flags.1?Vector<MessagePeerReaction>"
        },
        {
          "name": "top_reactors",
          "type": "flags.4?Vector<MessageReactor>"
        }
      ],
      "type": "MessageReactions"
    },
    {
      "id": 834488621,
      "predicate": "messages.messageReactionsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "reactions",
          "type": "Vector<MessagePeerReaction>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        }
      ],
      "type": "messages.MessageReactionsList"
    },
    {
      "id": 3229084673,
      "predicate": "availableReaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inactive",
          "type": "flags.0?true"
        },
        {
          "name": "premium",
          "type": "flags.2?true"
        },
        {
          "name": "reaction",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "static_icon",
          "type": "Document"
        },
        {
          "name": "appear_animation",
          "type": "Document"
        },
        {
          "name": "select_animation",
          "type": "Document"
        },
        {
          "name": "activate_animation",
          "type": "Document"
        },
        {
          "name": "effect_animation",
          "type": "Document"
        },
        {
          "name": "around_animation",
          "type": "flags.1?Document"
        },
        {
          "name": "center_icon",
          "type": "flags.1?Document"
        }
      ],
      "type": "AvailableReaction"
    },
    {
      "id": 2668042583,
      "predicate": "messages.availableReactionsNotModified",
      "params": [],
      "type": "messages.AvailableReactions"
    },
    {
      "id": 1989032621,
      "predicate": "messages.availableReactions",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "reactions",
          "type": "Vector<AvailableReaction>"
        }
      ],
      "type": "messages.AvailableReactions"
    },
    {
      "id": 2356786748,
      "predicate": "messagePeerReaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "big",
          "type": "flags.0?true"
        },
        {
          "name": "unread",
          "type": "flags.1?true"
        },
        {
          "name": "my",
          "type": "flags.2?true"
        },
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        }
      ],
      "type": "MessagePeerReaction"
    },
    {
      "id": 2162903215,
      "predicate": "groupCallStreamChannel",
      "params": [
        {
          "name": "channel",
          "type": "int"
        },
        {
          "name": "scale",
          "type": "int"
        },
        {
          "name": "last_timestamp_ms",
          "type": "long"
        }
      ],
      "type": "GroupCallStreamChannel"
    },
    {
      "id": 3504636594,
      "predicate": "phone.groupCallStreamChannels",
      "params": [
        {
          "name": "channels",
          "type": "Vector<GroupCallStreamChannel>"
        }
      ],
      "type": "phone.GroupCallStreamChannels"
    },
    {
      "id": 767505458,
      "predicate": "phone.groupCallStreamRtmpUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "key",
          "type": "string"
        }
      ],
      "type": "phone.GroupCallStreamRtmpUrl"
    },
    {
      "id": 1165423600,
      "predicate": "attachMenuBotIconColor",
      "params": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "color",
          "type": "int"
        }
      ],
      "type": "AttachMenuBotIconColor"
    },
    {
      "id": 2997303403,
      "predicate": "attachMenuBotIcon",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "icon",
          "type": "Document"
        },
        {
          "name": "colors",
          "type": "flags.0?Vector<AttachMenuBotIconColor>"
        }
      ],
      "type": "AttachMenuBotIcon"
    },
    {
      "id": 3641544190,
      "predicate": "attachMenuBot",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inactive",
          "type": "flags.0?true"
        },
        {
          "name": "has_settings",
          "type": "flags.1?true"
        },
        {
          "name": "request_write_access",
          "type": "flags.2?true"
        },
        {
          "name": "show_in_attach_menu",
          "type": "flags.3?true"
        },
        {
          "name": "show_in_side_menu",
          "type": "flags.4?true"
        },
        {
          "name": "side_menu_disclaimer_needed",
          "type": "flags.5?true"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "peer_types",
          "type": "flags.3?Vector<AttachMenuPeerType>"
        },
        {
          "name": "icons",
          "type": "Vector<AttachMenuBotIcon>"
        }
      ],
      "type": "AttachMenuBot"
    },
    {
      "id": 4057500252,
      "predicate": "attachMenuBotsNotModified",
      "params": [],
      "type": "AttachMenuBots"
    },
    {
      "id": 1011024320,
      "predicate": "attachMenuBots",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "bots",
          "type": "Vector<AttachMenuBot>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "AttachMenuBots"
    },
    {
      "id": 2478794367,
      "predicate": "attachMenuBotsBot",
      "params": [
        {
          "name": "bot",
          "type": "AttachMenuBot"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "AttachMenuBotsBot"
    },
    {
      "id": 1294139288,
      "predicate": "webViewResultUrl",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "fullsize",
          "type": "flags.1?true"
        },
        {
          "name": "fullscreen",
          "type": "flags.2?true"
        },
        {
          "name": "query_id",
          "type": "flags.0?long"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "WebViewResult"
    },
    {
      "id": 211046684,
      "predicate": "webViewMessageSent",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "msg_id",
          "type": "flags.0?InputBotInlineMessageID"
        }
      ],
      "type": "WebViewMessageSent"
    },
    {
      "id": 1966318984,
      "predicate": "botMenuButtonDefault",
      "params": [],
      "type": "BotMenuButton"
    },
    {
      "id": 1113113093,
      "predicate": "botMenuButtonCommands",
      "params": [],
      "type": "BotMenuButton"
    },
    {
      "id": 3350559974,
      "predicate": "botMenuButton",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "BotMenuButton"
    },
    {
      "id": 4227262641,
      "predicate": "account.savedRingtonesNotModified",
      "params": [],
      "type": "account.SavedRingtones"
    },
    {
      "id": 3253284037,
      "predicate": "account.savedRingtones",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "ringtones",
          "type": "Vector<Document>"
        }
      ],
      "type": "account.SavedRingtones"
    },
    {
      "id": 2548612798,
      "predicate": "notificationSoundDefault",
      "params": [],
      "type": "NotificationSound"
    },
    {
      "id": 1863070943,
      "predicate": "notificationSoundNone",
      "params": [],
      "type": "NotificationSound"
    },
    {
      "id": 2198575844,
      "predicate": "notificationSoundLocal",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "NotificationSound"
    },
    {
      "id": 4285300809,
      "predicate": "notificationSoundRingtone",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "NotificationSound"
    },
    {
      "id": 3072737133,
      "predicate": "account.savedRingtone",
      "params": [],
      "type": "account.SavedRingtone"
    },
    {
      "id": 523271863,
      "predicate": "account.savedRingtoneConverted",
      "params": [
        {
          "name": "document",
          "type": "Document"
        }
      ],
      "type": "account.SavedRingtone"
    },
    {
      "id": 2104224014,
      "predicate": "attachMenuPeerTypeSameBotPM",
      "params": [],
      "type": "AttachMenuPeerType"
    },
    {
      "id": 3274439194,
      "predicate": "attachMenuPeerTypeBotPM",
      "params": [],
      "type": "AttachMenuPeerType"
    },
    {
      "id": 4047950623,
      "predicate": "attachMenuPeerTypePM",
      "params": [],
      "type": "AttachMenuPeerType"
    },
    {
      "id": 84480319,
      "predicate": "attachMenuPeerTypeChat",
      "params": [],
      "type": "AttachMenuPeerType"
    },
    {
      "id": 2080104188,
      "predicate": "attachMenuPeerTypeBroadcast",
      "params": [],
      "type": "AttachMenuPeerType"
    },
    {
      "id": 3317000281,
      "predicate": "inputInvoiceMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 3274099439,
      "predicate": "inputInvoiceSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 2560125965,
      "predicate": "inputInvoicePremiumGiftCode",
      "params": [
        {
          "name": "purpose",
          "type": "InputStorePaymentPurpose"
        },
        {
          "name": "option",
          "type": "PremiumGiftCodeOption"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 1710230755,
      "predicate": "inputInvoiceStars",
      "params": [
        {
          "name": "purpose",
          "type": "InputStorePaymentPurpose"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 887591921,
      "predicate": "inputInvoiceChatInviteSubscription",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 3898760850,
      "predicate": "inputInvoiceStarGift",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "hide_name",
          "type": "flags.0?true"
        },
        {
          "name": "include_upgrade",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "gift_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "flags.1?TextWithEntities"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 1300335965,
      "predicate": "inputInvoiceStarGiftUpgrade",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "keep_original_details",
          "type": "flags.0?true"
        },
        {
          "name": "stargift",
          "type": "InputSavedStarGift"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 1247763417,
      "predicate": "inputInvoiceStarGiftTransfer",
      "params": [
        {
          "name": "stargift",
          "type": "InputSavedStarGift"
        },
        {
          "name": "to_id",
          "type": "InputPeer"
        }
      ],
      "type": "InputInvoice"
    },
    {
      "id": 2932919257,
      "predicate": "payments.exportedInvoice",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.ExportedInvoice"
    },
    {
      "id": 3485063511,
      "predicate": "messages.transcribedAudio",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pending",
          "type": "flags.0?true"
        },
        {
          "name": "transcription_id",
          "type": "long"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "trial_remains_num",
          "type": "flags.1?int"
        },
        {
          "name": "trial_remains_until_date",
          "type": "flags.1?int"
        }
      ],
      "type": "messages.TranscribedAudio"
    },
    {
      "id": 1395946908,
      "predicate": "help.premiumPromo",
      "params": [
        {
          "name": "status_text",
          "type": "string"
        },
        {
          "name": "status_entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "video_sections",
          "type": "Vector<string>"
        },
        {
          "name": "videos",
          "type": "Vector<Document>"
        },
        {
          "name": "period_options",
          "type": "Vector<PremiumSubscriptionOption>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "help.PremiumPromo"
    },
    {
      "id": 2792693350,
      "predicate": "inputStorePaymentPremiumSubscription",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "restore",
          "type": "flags.0?true"
        },
        {
          "name": "upgrade",
          "type": "flags.1?true"
        }
      ],
      "type": "InputStorePaymentPurpose"
    },
    {
      "id": 1634697192,
      "predicate": "inputStorePaymentGiftPremium",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "InputStorePaymentPurpose"
    },
    {
      "id": 4219011987,
      "predicate": "inputStorePaymentPremiumGiftCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "users",
          "type": "Vector<InputUser>"
        },
        {
          "name": "boost_peer",
          "type": "flags.0?InputPeer"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "message",
          "type": "flags.1?TextWithEntities"
        }
      ],
      "type": "InputStorePaymentPurpose"
    },
    {
      "id": 369444042,
      "predicate": "inputStorePaymentPremiumGiveaway",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "only_new_subscribers",
          "type": "flags.0?true"
        },
        {
          "name": "winners_are_visible",
          "type": "flags.3?true"
        },
        {
          "name": "boost_peer",
          "type": "InputPeer"
        },
        {
          "name": "additional_peers",
          "type": "flags.1?Vector<InputPeer>"
        },
        {
          "name": "countries_iso2",
          "type": "flags.2?Vector<string>"
        },
        {
          "name": "prize_description",
          "type": "flags.4?string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "until_date",
          "type": "int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "InputStorePaymentPurpose"
    },
    {
      "id": 3722252118,
      "predicate": "inputStorePaymentStarsTopup",
      "params": [
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "InputStorePaymentPurpose"
    },
    {
      "id": 494149367,
      "predicate": "inputStorePaymentStarsGift",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "InputStorePaymentPurpose"
    },
    {
      "id": 1964968186,
      "predicate": "inputStorePaymentStarsGiveaway",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "only_new_subscribers",
          "type": "flags.0?true"
        },
        {
          "name": "winners_are_visible",
          "type": "flags.3?true"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "boost_peer",
          "type": "InputPeer"
        },
        {
          "name": "additional_peers",
          "type": "flags.1?Vector<InputPeer>"
        },
        {
          "name": "countries_iso2",
          "type": "flags.2?Vector<string>"
        },
        {
          "name": "prize_description",
          "type": "flags.4?string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "until_date",
          "type": "int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "users",
          "type": "int"
        }
      ],
      "type": "InputStorePaymentPurpose"
    },
    {
      "id": 1958953753,
      "predicate": "premiumGiftOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "months",
          "type": "int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "bot_url",
          "type": "string"
        },
        {
          "name": "store_product",
          "type": "flags.0?string"
        }
      ],
      "type": "PremiumGiftOption"
    },
    {
      "id": 2298016283,
      "predicate": "paymentFormMethod",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "PaymentFormMethod"
    },
    {
      "id": 769727150,
      "predicate": "emojiStatusEmpty",
      "params": [],
      "type": "EmojiStatus"
    },
    {
      "id": 3892250250,
      "predicate": "emojiStatus",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document_id",
          "type": "long"
        },
        {
          "name": "until",
          "type": "flags.0?int"
        }
      ],
      "type": "EmojiStatus"
    },
    {
      "id": 1904500795,
      "predicate": "emojiStatusCollectible",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "collectible_id",
          "type": "long"
        },
        {
          "name": "document_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "pattern_document_id",
          "type": "long"
        },
        {
          "name": "center_color",
          "type": "int"
        },
        {
          "name": "edge_color",
          "type": "int"
        },
        {
          "name": "pattern_color",
          "type": "int"
        },
        {
          "name": "text_color",
          "type": "int"
        },
        {
          "name": "until",
          "type": "flags.0?int"
        }
      ],
      "type": "EmojiStatus"
    },
    {
      "id": 118758847,
      "predicate": "inputEmojiStatusCollectible",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "collectible_id",
          "type": "long"
        },
        {
          "name": "until",
          "type": "flags.0?int"
        }
      ],
      "type": "EmojiStatus"
    },
    {
      "id": 3498894917,
      "predicate": "account.emojiStatusesNotModified",
      "params": [],
      "type": "account.EmojiStatuses"
    },
    {
      "id": 2428790737,
      "predicate": "account.emojiStatuses",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "statuses",
          "type": "Vector<EmojiStatus>"
        }
      ],
      "type": "account.EmojiStatuses"
    },
    {
      "id": 2046153753,
      "predicate": "reactionEmpty",
      "params": [],
      "type": "Reaction"
    },
    {
      "id": 455247544,
      "predicate": "reactionEmoji",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "Reaction"
    },
    {
      "id": 2302016627,
      "predicate": "reactionCustomEmoji",
      "params": [
        {
          "name": "document_id",
          "type": "long"
        }
      ],
      "type": "Reaction"
    },
    {
      "id": 1379771627,
      "predicate": "reactionPaid",
      "params": [],
      "type": "Reaction"
    },
    {
      "id": 3942396604,
      "predicate": "chatReactionsNone",
      "params": [],
      "type": "ChatReactions"
    },
    {
      "id": 1385335754,
      "predicate": "chatReactionsAll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "allow_custom",
          "type": "flags.0?true"
        }
      ],
      "type": "ChatReactions"
    },
    {
      "id": 1713193015,
      "predicate": "chatReactionsSome",
      "params": [
        {
          "name": "reactions",
          "type": "Vector<Reaction>"
        }
      ],
      "type": "ChatReactions"
    },
    {
      "id": 2960120799,
      "predicate": "messages.reactionsNotModified",
      "params": [],
      "type": "messages.Reactions"
    },
    {
      "id": 3942512406,
      "predicate": "messages.reactions",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "reactions",
          "type": "Vector<Reaction>"
        }
      ],
      "type": "messages.Reactions"
    },
    {
      "id": 1128644211,
      "predicate": "emailVerifyPurposeLoginSetup",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "EmailVerifyPurpose"
    },
    {
      "id": 1383932651,
      "predicate": "emailVerifyPurposeLoginChange",
      "params": [],
      "type": "EmailVerifyPurpose"
    },
    {
      "id": 3153401477,
      "predicate": "emailVerifyPurposePassport",
      "params": [],
      "type": "EmailVerifyPurpose"
    },
    {
      "id": 2452510121,
      "predicate": "emailVerificationCode",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "EmailVerification"
    },
    {
      "id": 3683688130,
      "predicate": "emailVerificationGoogle",
      "params": [
        {
          "name": "token",
          "type": "string"
        }
      ],
      "type": "EmailVerification"
    },
    {
      "id": 2530243837,
      "predicate": "emailVerificationApple",
      "params": [
        {
          "name": "token",
          "type": "string"
        }
      ],
      "type": "EmailVerification"
    },
    {
      "id": 731303195,
      "predicate": "account.emailVerified",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "account.EmailVerified"
    },
    {
      "id": 3787132257,
      "predicate": "account.emailVerifiedLogin",
      "params": [
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "sent_code",
          "type": "auth.SentCode"
        }
      ],
      "type": "account.EmailVerified"
    },
    {
      "id": 1596792306,
      "predicate": "premiumSubscriptionOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "current",
          "type": "flags.1?true"
        },
        {
          "name": "can_purchase_upgrade",
          "type": "flags.2?true"
        },
        {
          "name": "transaction",
          "type": "flags.3?string"
        },
        {
          "name": "months",
          "type": "int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "bot_url",
          "type": "string"
        },
        {
          "name": "store_product",
          "type": "flags.0?string"
        }
      ],
      "type": "PremiumSubscriptionOption"
    },
    {
      "id": 3088871476,
      "predicate": "sendAsPeer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "premium_required",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "SendAsPeer"
    },
    {
      "id": 2908916936,
      "predicate": "messageExtendedMediaPreview",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "w",
          "type": "flags.0?int"
        },
        {
          "name": "h",
          "type": "flags.0?int"
        },
        {
          "name": "thumb",
          "type": "flags.1?PhotoSize"
        },
        {
          "name": "video_duration",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageExtendedMedia"
    },
    {
      "id": 3997670500,
      "predicate": "messageExtendedMedia",
      "params": [
        {
          "name": "media",
          "type": "MessageMedia"
        }
      ],
      "type": "MessageExtendedMedia"
    },
    {
      "id": 4244550300,
      "predicate": "stickerKeyword",
      "params": [
        {
          "name": "document_id",
          "type": "long"
        },
        {
          "name": "keyword",
          "type": "Vector<string>"
        }
      ],
      "type": "StickerKeyword"
    },
    {
      "id": 3020371527,
      "predicate": "username",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "editable",
          "type": "flags.0?true"
        },
        {
          "name": "active",
          "type": "flags.1?true"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Username"
    },
    {
      "id": 37687451,
      "predicate": "forumTopicDeleted",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "ForumTopic"
    },
    {
      "id": 1903173033,
      "predicate": "forumTopic",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "my",
          "type": "flags.1?true"
        },
        {
          "name": "closed",
          "type": "flags.2?true"
        },
        {
          "name": "pinned",
          "type": "flags.3?true"
        },
        {
          "name": "short",
          "type": "flags.5?true"
        },
        {
          "name": "hidden",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "icon_color",
          "type": "int"
        },
        {
          "name": "icon_emoji_id",
          "type": "flags.0?long"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "unread_mentions_count",
          "type": "int"
        },
        {
          "name": "unread_reactions_count",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "Peer"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "draft",
          "type": "flags.4?DraftMessage"
        }
      ],
      "type": "ForumTopic"
    },
    {
      "id": 913709011,
      "predicate": "messages.forumTopics",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "order_by_create_date",
          "type": "flags.0?true"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "topics",
          "type": "Vector<ForumTopic>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "messages.ForumTopics"
    },
    {
      "id": 1135897376,
      "predicate": "defaultHistoryTTL",
      "params": [
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "DefaultHistoryTTL"
    },
    {
      "id": 1103040667,
      "predicate": "exportedContactToken",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "ExportedContactToken"
    },
    {
      "id": 1597737472,
      "predicate": "requestPeerTypeUser",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "flags.0?Bool"
        },
        {
          "name": "premium",
          "type": "flags.1?Bool"
        }
      ],
      "type": "RequestPeerType"
    },
    {
      "id": 3387977243,
      "predicate": "requestPeerTypeChat",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "bot_participant",
          "type": "flags.5?true"
        },
        {
          "name": "has_username",
          "type": "flags.3?Bool"
        },
        {
          "name": "forum",
          "type": "flags.4?Bool"
        },
        {
          "name": "user_admin_rights",
          "type": "flags.1?ChatAdminRights"
        },
        {
          "name": "bot_admin_rights",
          "type": "flags.2?ChatAdminRights"
        }
      ],
      "type": "RequestPeerType"
    },
    {
      "id": 865857388,
      "predicate": "requestPeerTypeBroadcast",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "has_username",
          "type": "flags.3?Bool"
        },
        {
          "name": "user_admin_rights",
          "type": "flags.1?ChatAdminRights"
        },
        {
          "name": "bot_admin_rights",
          "type": "flags.2?ChatAdminRights"
        }
      ],
      "type": "RequestPeerType"
    },
    {
      "id": 1209970170,
      "predicate": "emojiListNotModified",
      "params": [],
      "type": "EmojiList"
    },
    {
      "id": 2048790993,
      "predicate": "emojiList",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "document_id",
          "type": "Vector<long>"
        }
      ],
      "type": "EmojiList"
    },
    {
      "id": 2056961449,
      "predicate": "emojiGroup",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "icon_emoji_id",
          "type": "long"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiGroup"
    },
    {
      "id": 2161274055,
      "predicate": "emojiGroupGreeting",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "icon_emoji_id",
          "type": "long"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiGroup"
    },
    {
      "id": 154914612,
      "predicate": "emojiGroupPremium",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "icon_emoji_id",
          "type": "long"
        }
      ],
      "type": "EmojiGroup"
    },
    {
      "id": 1874111879,
      "predicate": "messages.emojiGroupsNotModified",
      "params": [],
      "type": "messages.EmojiGroups"
    },
    {
      "id": 2283780427,
      "predicate": "messages.emojiGroups",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "groups",
          "type": "Vector<EmojiGroup>"
        }
      ],
      "type": "messages.EmojiGroups"
    },
    {
      "id": 1964978502,
      "predicate": "textWithEntities",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        }
      ],
      "type": "TextWithEntities"
    },
    {
      "id": 870003448,
      "predicate": "messages.translateResult",
      "params": [
        {
          "name": "result",
          "type": "Vector<TextWithEntities>"
        }
      ],
      "type": "messages.TranslatedText"
    },
    {
      "id": 3360175310,
      "predicate": "autoSaveSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photos",
          "type": "flags.0?true"
        },
        {
          "name": "videos",
          "type": "flags.1?true"
        },
        {
          "name": "video_max_size",
          "type": "flags.2?long"
        }
      ],
      "type": "AutoSaveSettings"
    },
    {
      "id": 2170563911,
      "predicate": "autoSaveException",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "settings",
          "type": "AutoSaveSettings"
        }
      ],
      "type": "AutoSaveException"
    },
    {
      "id": 1279133341,
      "predicate": "account.autoSaveSettings",
      "params": [
        {
          "name": "users_settings",
          "type": "AutoSaveSettings"
        },
        {
          "name": "chats_settings",
          "type": "AutoSaveSettings"
        },
        {
          "name": "broadcasts_settings",
          "type": "AutoSaveSettings"
        },
        {
          "name": "exceptions",
          "type": "Vector<AutoSaveException>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.AutoSaveSettings"
    },
    {
      "id": 2094949405,
      "predicate": "help.appConfigNotModified",
      "params": [],
      "type": "help.AppConfig"
    },
    {
      "id": 3709368366,
      "predicate": "help.appConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "config",
          "type": "JSONValue"
        }
      ],
      "type": "help.AppConfig"
    },
    {
      "id": 2837495162,
      "predicate": "inputBotAppID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputBotApp"
    },
    {
      "id": 2425095175,
      "predicate": "inputBotAppShortName",
      "params": [
        {
          "name": "bot_id",
          "type": "InputUser"
        },
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputBotApp"
    },
    {
      "id": 1571189943,
      "predicate": "botAppNotModified",
      "params": [],
      "type": "BotApp"
    },
    {
      "id": 2516373974,
      "predicate": "botApp",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "BotApp"
    },
    {
      "id": 3947933173,
      "predicate": "messages.botApp",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inactive",
          "type": "flags.0?true"
        },
        {
          "name": "request_write_access",
          "type": "flags.1?true"
        },
        {
          "name": "has_settings",
          "type": "flags.2?true"
        },
        {
          "name": "app",
          "type": "BotApp"
        }
      ],
      "type": "messages.BotApp"
    },
    {
      "id": 3044185557,
      "predicate": "inlineBotWebView",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "InlineBotWebView"
    },
    {
      "id": 1246753138,
      "predicate": "readParticipantDate",
      "params": [
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ReadParticipantDate"
    },
    {
      "id": 4091599411,
      "predicate": "inputChatlistDialogFilter",
      "params": [
        {
          "name": "filter_id",
          "type": "int"
        }
      ],
      "type": "InputChatlist"
    },
    {
      "id": 206668204,
      "predicate": "exportedChatlistInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "peers",
          "type": "Vector<Peer>"
        }
      ],
      "type": "ExportedChatlistInvite"
    },
    {
      "id": 283567014,
      "predicate": "chatlists.exportedChatlistInvite",
      "params": [
        {
          "name": "filter",
          "type": "DialogFilter"
        },
        {
          "name": "invite",
          "type": "ExportedChatlistInvite"
        }
      ],
      "type": "chatlists.ExportedChatlistInvite"
    },
    {
      "id": 279670215,
      "predicate": "chatlists.exportedInvites",
      "params": [
        {
          "name": "invites",
          "type": "Vector<ExportedChatlistInvite>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "chatlists.ExportedInvites"
    },
    {
      "id": 4203214425,
      "predicate": "chatlists.chatlistInviteAlready",
      "params": [
        {
          "name": "filter_id",
          "type": "int"
        },
        {
          "name": "missing_peers",
          "type": "Vector<Peer>"
        },
        {
          "name": "already_peers",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "chatlists.ChatlistInvite"
    },
    {
      "id": 4044279343,
      "predicate": "chatlists.chatlistInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title_noanimate",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "TextWithEntities"
        },
        {
          "name": "emoticon",
          "type": "flags.0?string"
        },
        {
          "name": "peers",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "chatlists.ChatlistInvite"
    },
    {
      "id": 2478671757,
      "predicate": "chatlists.chatlistUpdates",
      "params": [
        {
          "name": "missing_peers",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "chatlists.ChatlistUpdates"
    },
    {
      "id": 3903288752,
      "predicate": "bots.botInfo",
      "params": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "bots.BotInfo"
    },
    {
      "id": 3066834268,
      "predicate": "messagePeerVote",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessagePeerVote"
    },
    {
      "id": 1959634180,
      "predicate": "messagePeerVoteInputOption",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessagePeerVote"
    },
    {
      "id": 1177089766,
      "predicate": "messagePeerVoteMultiple",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessagePeerVote"
    },
    {
      "id": 2371443926,
      "predicate": "storyViews",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_viewers",
          "type": "flags.1?true"
        },
        {
          "name": "views_count",
          "type": "int"
        },
        {
          "name": "forwards_count",
          "type": "flags.2?int"
        },
        {
          "name": "reactions",
          "type": "flags.3?Vector<ReactionCount>"
        },
        {
          "name": "reactions_count",
          "type": "flags.4?int"
        },
        {
          "name": "recent_viewers",
          "type": "flags.0?Vector<long>"
        }
      ],
      "type": "StoryViews"
    },
    {
      "id": 1374088783,
      "predicate": "storyItemDeleted",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "StoryItem"
    },
    {
      "id": 4289579283,
      "predicate": "storyItemSkipped",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "close_friends",
          "type": "flags.8?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expire_date",
          "type": "int"
        }
      ],
      "type": "StoryItem"
    },
    {
      "id": 2041735716,
      "predicate": "storyItem",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.5?true"
        },
        {
          "name": "public",
          "type": "flags.7?true"
        },
        {
          "name": "close_friends",
          "type": "flags.8?true"
        },
        {
          "name": "min",
          "type": "flags.9?true"
        },
        {
          "name": "noforwards",
          "type": "flags.10?true"
        },
        {
          "name": "edited",
          "type": "flags.11?true"
        },
        {
          "name": "contacts",
          "type": "flags.12?true"
        },
        {
          "name": "selected_contacts",
          "type": "flags.13?true"
        },
        {
          "name": "out",
          "type": "flags.16?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.18?Peer"
        },
        {
          "name": "fwd_from",
          "type": "flags.17?StoryFwdHeader"
        },
        {
          "name": "expire_date",
          "type": "int"
        },
        {
          "name": "caption",
          "type": "flags.0?string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "media",
          "type": "MessageMedia"
        },
        {
          "name": "media_areas",
          "type": "flags.14?Vector<MediaArea>"
        },
        {
          "name": "privacy",
          "type": "flags.2?Vector<PrivacyRule>"
        },
        {
          "name": "views",
          "type": "flags.3?StoryViews"
        },
        {
          "name": "sent_reaction",
          "type": "flags.15?Reaction"
        }
      ],
      "type": "StoryItem"
    },
    {
      "id": 291044926,
      "predicate": "stories.allStoriesNotModified",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "state",
          "type": "string"
        },
        {
          "name": "stealth_mode",
          "type": "StoriesStealthMode"
        }
      ],
      "type": "stories.AllStories"
    },
    {
      "id": 1862033025,
      "predicate": "stories.allStories",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_more",
          "type": "flags.0?true"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "state",
          "type": "string"
        },
        {
          "name": "peer_stories",
          "type": "Vector<PeerStories>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "stealth_mode",
          "type": "StoriesStealthMode"
        }
      ],
      "type": "stories.AllStories"
    },
    {
      "id": 1673780490,
      "predicate": "stories.stories",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "stories",
          "type": "Vector<StoryItem>"
        },
        {
          "name": "pinned_to_top",
          "type": "flags.0?Vector<int>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "stories.Stories"
    },
    {
      "id": 2965236421,
      "predicate": "storyView",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "blocked_my_stories_from",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "flags.2?Reaction"
        }
      ],
      "type": "StoryView"
    },
    {
      "id": 2424530699,
      "predicate": "storyViewPublicForward",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "blocked_my_stories_from",
          "type": "flags.1?true"
        },
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "StoryView"
    },
    {
      "id": 3178549065,
      "predicate": "storyViewPublicRepost",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "blocked_my_stories_from",
          "type": "flags.1?true"
        },
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "story",
          "type": "StoryItem"
        }
      ],
      "type": "StoryView"
    },
    {
      "id": 1507299269,
      "predicate": "stories.storyViewsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "views_count",
          "type": "int"
        },
        {
          "name": "forwards_count",
          "type": "int"
        },
        {
          "name": "reactions_count",
          "type": "int"
        },
        {
          "name": "views",
          "type": "Vector<StoryView>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        }
      ],
      "type": "stories.StoryViewsList"
    },
    {
      "id": 3734957341,
      "predicate": "stories.storyViews",
      "params": [
        {
          "name": "views",
          "type": "Vector<StoryViews>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "stories.StoryViews"
    },
    {
      "id": 583071445,
      "predicate": "inputReplyToMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reply_to_msg_id",
          "type": "int"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "reply_to_peer_id",
          "type": "flags.1?InputPeer"
        },
        {
          "name": "quote_text",
          "type": "flags.2?string"
        },
        {
          "name": "quote_entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "quote_offset",
          "type": "flags.4?int"
        }
      ],
      "type": "InputReplyTo"
    },
    {
      "id": 1484862010,
      "predicate": "inputReplyToStory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "story_id",
          "type": "int"
        }
      ],
      "type": "InputReplyTo"
    },
    {
      "id": 1070138683,
      "predicate": "exportedStoryLink",
      "params": [
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "ExportedStoryLink"
    },
    {
      "id": 1898850301,
      "predicate": "storiesStealthMode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "active_until_date",
          "type": "flags.0?int"
        },
        {
          "name": "cooldown_until_date",
          "type": "flags.1?int"
        }
      ],
      "type": "StoriesStealthMode"
    },
    {
      "id": 3486113794,
      "predicate": "mediaAreaCoordinates",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "x",
          "type": "double"
        },
        {
          "name": "y",
          "type": "double"
        },
        {
          "name": "w",
          "type": "double"
        },
        {
          "name": "h",
          "type": "double"
        },
        {
          "name": "rotation",
          "type": "double"
        },
        {
          "name": "radius",
          "type": "flags.0?double"
        }
      ],
      "type": "MediaAreaCoordinates"
    },
    {
      "id": 3196246940,
      "predicate": "mediaAreaVenue",
      "params": [
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 2994872703,
      "predicate": "inputMediaAreaVenue",
      "params": [
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "result_id",
          "type": "string"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 3402974509,
      "predicate": "mediaAreaGeoPoint",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "address",
          "type": "flags.0?GeoPointAddress"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 340088945,
      "predicate": "mediaAreaSuggestedReaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "flipped",
          "type": "flags.1?true"
        },
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 1996756655,
      "predicate": "mediaAreaChannelPost",
      "params": [
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 577893055,
      "predicate": "inputMediaAreaChannelPost",
      "params": [
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 926421125,
      "predicate": "mediaAreaUrl",
      "params": [
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 1235637404,
      "predicate": "mediaAreaWeather",
      "params": [
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "emoji",
          "type": "string"
        },
        {
          "name": "temperature_c",
          "type": "double"
        },
        {
          "name": "color",
          "type": "int"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 1468491885,
      "predicate": "mediaAreaStarGift",
      "params": [
        {
          "name": "coordinates",
          "type": "MediaAreaCoordinates"
        },
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "MediaArea"
    },
    {
      "id": 2587224473,
      "predicate": "peerStories",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_read_id",
          "type": "flags.0?int"
        },
        {
          "name": "stories",
          "type": "Vector<StoryItem>"
        }
      ],
      "type": "PeerStories"
    },
    {
      "id": 3404105576,
      "predicate": "stories.peerStories",
      "params": [
        {
          "name": "stories",
          "type": "PeerStories"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "stories.PeerStories"
    },
    {
      "id": 4250800829,
      "predicate": "messages.webPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.WebPage"
    },
    {
      "id": 629052971,
      "predicate": "premiumGiftCodeOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "users",
          "type": "int"
        },
        {
          "name": "months",
          "type": "int"
        },
        {
          "name": "store_product",
          "type": "flags.0?string"
        },
        {
          "name": "store_quantity",
          "type": "flags.1?int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "PremiumGiftCodeOption"
    },
    {
      "id": 675942550,
      "predicate": "payments.checkedGiftCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "via_giveaway",
          "type": "flags.2?true"
        },
        {
          "name": "from_id",
          "type": "flags.4?Peer"
        },
        {
          "name": "giveaway_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "to_id",
          "type": "flags.0?long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "months",
          "type": "int"
        },
        {
          "name": "used_date",
          "type": "flags.1?int"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.CheckedGiftCode"
    },
    {
      "id": 1130879648,
      "predicate": "payments.giveawayInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "participating",
          "type": "flags.0?true"
        },
        {
          "name": "preparing_results",
          "type": "flags.3?true"
        },
        {
          "name": "start_date",
          "type": "int"
        },
        {
          "name": "joined_too_early_date",
          "type": "flags.1?int"
        },
        {
          "name": "admin_disallowed_chat_id",
          "type": "flags.2?long"
        },
        {
          "name": "disallowed_country",
          "type": "flags.4?string"
        }
      ],
      "type": "payments.GiveawayInfo"
    },
    {
      "id": 3782600303,
      "predicate": "payments.giveawayInfoResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "winner",
          "type": "flags.0?true"
        },
        {
          "name": "refunded",
          "type": "flags.1?true"
        },
        {
          "name": "start_date",
          "type": "int"
        },
        {
          "name": "gift_code_slug",
          "type": "flags.3?string"
        },
        {
          "name": "stars_prize",
          "type": "flags.4?long"
        },
        {
          "name": "finish_date",
          "type": "int"
        },
        {
          "name": "winners_count",
          "type": "int"
        },
        {
          "name": "activated_count",
          "type": "flags.2?int"
        }
      ],
      "type": "payments.GiveawayInfo"
    },
    {
      "id": 2991824212,
      "predicate": "prepaidGiveaway",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "months",
          "type": "int"
        },
        {
          "name": "quantity",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "PrepaidGiveaway"
    },
    {
      "id": 2594011104,
      "predicate": "prepaidStarsGiveaway",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "quantity",
          "type": "int"
        },
        {
          "name": "boosts",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "PrepaidGiveaway"
    },
    {
      "id": 1262359766,
      "predicate": "boost",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gift",
          "type": "flags.1?true"
        },
        {
          "name": "giveaway",
          "type": "flags.2?true"
        },
        {
          "name": "unclaimed",
          "type": "flags.3?true"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "flags.0?long"
        },
        {
          "name": "giveaway_msg_id",
          "type": "flags.2?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "used_gift_slug",
          "type": "flags.4?string"
        },
        {
          "name": "multiplier",
          "type": "flags.5?int"
        },
        {
          "name": "stars",
          "type": "flags.6?long"
        }
      ],
      "type": "Boost"
    },
    {
      "id": 2264424764,
      "predicate": "premium.boostsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "boosts",
          "type": "Vector<Boost>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "premium.BoostsList"
    },
    {
      "id": 3293069660,
      "predicate": "myBoost",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "slot",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "flags.0?Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "cooldown_until_date",
          "type": "flags.1?int"
        }
      ],
      "type": "MyBoost"
    },
    {
      "id": 2598512866,
      "predicate": "premium.myBoosts",
      "params": [
        {
          "name": "my_boosts",
          "type": "Vector<MyBoost>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "premium.MyBoosts"
    },
    {
      "id": 1230586490,
      "predicate": "premium.boostsStatus",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "my_boost",
          "type": "flags.2?true"
        },
        {
          "name": "level",
          "type": "int"
        },
        {
          "name": "current_level_boosts",
          "type": "int"
        },
        {
          "name": "boosts",
          "type": "int"
        },
        {
          "name": "gift_boosts",
          "type": "flags.4?int"
        },
        {
          "name": "next_level_boosts",
          "type": "flags.0?int"
        },
        {
          "name": "premium_audience",
          "type": "flags.1?StatsPercentValue"
        },
        {
          "name": "boost_url",
          "type": "string"
        },
        {
          "name": "prepaid_giveaways",
          "type": "flags.3?Vector<PrepaidGiveaway>"
        },
        {
          "name": "my_boost_slots",
          "type": "flags.2?Vector<int>"
        }
      ],
      "type": "premium.BoostsStatus"
    },
    {
      "id": 3089555792,
      "predicate": "storyFwdHeader",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "modified",
          "type": "flags.3?true"
        },
        {
          "name": "from",
          "type": "flags.0?Peer"
        },
        {
          "name": "from_name",
          "type": "flags.1?string"
        },
        {
          "name": "story_id",
          "type": "flags.2?int"
        }
      ],
      "type": "StoryFwdHeader"
    },
    {
      "id": 3875901055,
      "predicate": "postInteractionCountersMessage",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        },
        {
          "name": "forwards",
          "type": "int"
        },
        {
          "name": "reactions",
          "type": "int"
        }
      ],
      "type": "PostInteractionCounters"
    },
    {
      "id": 2319978023,
      "predicate": "postInteractionCountersStory",
      "params": [
        {
          "name": "story_id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        },
        {
          "name": "forwards",
          "type": "int"
        },
        {
          "name": "reactions",
          "type": "int"
        }
      ],
      "type": "PostInteractionCounters"
    },
    {
      "id": 1355613820,
      "predicate": "stats.storyStats",
      "params": [
        {
          "name": "views_graph",
          "type": "StatsGraph"
        },
        {
          "name": "reactions_by_emotion_graph",
          "type": "StatsGraph"
        }
      ],
      "type": "stats.StoryStats"
    },
    {
      "id": 32685898,
      "predicate": "publicForwardMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "PublicForward"
    },
    {
      "id": 3992169936,
      "predicate": "publicForwardStory",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "story",
          "type": "StoryItem"
        }
      ],
      "type": "PublicForward"
    },
    {
      "id": 2466479648,
      "predicate": "stats.publicForwards",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "forwards",
          "type": "Vector<PublicForward>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "stats.PublicForwards"
    },
    {
      "id": 3041614543,
      "predicate": "peerColor",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "color",
          "type": "flags.0?int"
        },
        {
          "name": "background_emoji_id",
          "type": "flags.1?long"
        }
      ],
      "type": "PeerColor"
    },
    {
      "id": 639736408,
      "predicate": "help.peerColorSet",
      "params": [
        {
          "name": "colors",
          "type": "Vector<int>"
        }
      ],
      "type": "help.PeerColorSet"
    },
    {
      "id": 1987928555,
      "predicate": "help.peerColorProfileSet",
      "params": [
        {
          "name": "palette_colors",
          "type": "Vector<int>"
        },
        {
          "name": "bg_colors",
          "type": "Vector<int>"
        },
        {
          "name": "story_colors",
          "type": "Vector<int>"
        }
      ],
      "type": "help.PeerColorSet"
    },
    {
      "id": 2917953214,
      "predicate": "help.peerColorOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "hidden",
          "type": "flags.0?true"
        },
        {
          "name": "color_id",
          "type": "int"
        },
        {
          "name": "colors",
          "type": "flags.1?help.PeerColorSet"
        },
        {
          "name": "dark_colors",
          "type": "flags.2?help.PeerColorSet"
        },
        {
          "name": "channel_min_level",
          "type": "flags.3?int"
        },
        {
          "name": "group_min_level",
          "type": "flags.4?int"
        }
      ],
      "type": "help.PeerColorOption"
    },
    {
      "id": 732034510,
      "predicate": "help.peerColorsNotModified",
      "params": [],
      "type": "help.PeerColors"
    },
    {
      "id": 16313608,
      "predicate": "help.peerColors",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "colors",
          "type": "Vector<help.PeerColorOption>"
        }
      ],
      "type": "help.PeerColors"
    },
    {
      "id": 1620104917,
      "predicate": "storyReaction",
      "params": [
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        }
      ],
      "type": "StoryReaction"
    },
    {
      "id": 3148555843,
      "predicate": "storyReactionPublicForward",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "StoryReaction"
    },
    {
      "id": 3486322451,
      "predicate": "storyReactionPublicRepost",
      "params": [
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "story",
          "type": "StoryItem"
        }
      ],
      "type": "StoryReaction"
    },
    {
      "id": 2858383516,
      "predicate": "stories.storyReactionsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "reactions",
          "type": "Vector<StoryReaction>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        }
      ],
      "type": "stories.StoryReactionsList"
    },
    {
      "id": 3179793260,
      "predicate": "savedDialog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        }
      ],
      "type": "SavedDialog"
    },
    {
      "id": 4164608545,
      "predicate": "messages.savedDialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector<SavedDialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.SavedDialogs"
    },
    {
      "id": 1153080793,
      "predicate": "messages.savedDialogsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "dialogs",
          "type": "Vector<SavedDialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.SavedDialogs"
    },
    {
      "id": 3223285736,
      "predicate": "messages.savedDialogsNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.SavedDialogs"
    },
    {
      "id": 3413112872,
      "predicate": "savedReactionTag",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "SavedReactionTag"
    },
    {
      "id": 2291882479,
      "predicate": "messages.savedReactionTagsNotModified",
      "params": [],
      "type": "messages.SavedReactionTags"
    },
    {
      "id": 844731658,
      "predicate": "messages.savedReactionTags",
      "params": [
        {
          "name": "tags",
          "type": "Vector<SavedReactionTag>"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.SavedReactionTags"
    },
    {
      "id": 1001931436,
      "predicate": "outboxReadDate",
      "params": [
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "OutboxReadDate"
    },
    {
      "id": 3700114639,
      "predicate": "smsjobs.eligibleToJoin",
      "params": [
        {
          "name": "terms_url",
          "type": "string"
        },
        {
          "name": "monthly_sent_sms",
          "type": "int"
        }
      ],
      "type": "smsjobs.EligibilityToJoin"
    },
    {
      "id": 720277905,
      "predicate": "smsjobs.status",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "allow_international",
          "type": "flags.0?true"
        },
        {
          "name": "recent_sent",
          "type": "int"
        },
        {
          "name": "recent_since",
          "type": "int"
        },
        {
          "name": "recent_remains",
          "type": "int"
        },
        {
          "name": "total_sent",
          "type": "int"
        },
        {
          "name": "total_since",
          "type": "int"
        },
        {
          "name": "last_gift_slug",
          "type": "flags.1?string"
        },
        {
          "name": "terms_url",
          "type": "string"
        }
      ],
      "type": "smsjobs.Status"
    },
    {
      "id": 3869372088,
      "predicate": "smsJob",
      "params": [
        {
          "name": "job_id",
          "type": "string"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SmsJob"
    },
    {
      "id": 302717625,
      "predicate": "businessWeeklyOpen",
      "params": [
        {
          "name": "start_minute",
          "type": "int"
        },
        {
          "name": "end_minute",
          "type": "int"
        }
      ],
      "type": "BusinessWeeklyOpen"
    },
    {
      "id": 2358423704,
      "predicate": "businessWorkHours",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "open_now",
          "type": "flags.0?true"
        },
        {
          "name": "timezone_id",
          "type": "string"
        },
        {
          "name": "weekly_open",
          "type": "Vector<BusinessWeeklyOpen>"
        }
      ],
      "type": "BusinessWorkHours"
    },
    {
      "id": 2891717367,
      "predicate": "businessLocation",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "address",
          "type": "string"
        }
      ],
      "type": "BusinessLocation"
    },
    {
      "id": 1871393450,
      "predicate": "inputBusinessRecipients",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "existing_chats",
          "type": "flags.0?true"
        },
        {
          "name": "new_chats",
          "type": "flags.1?true"
        },
        {
          "name": "contacts",
          "type": "flags.2?true"
        },
        {
          "name": "non_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "exclude_selected",
          "type": "flags.5?true"
        },
        {
          "name": "users",
          "type": "flags.4?Vector<InputUser>"
        }
      ],
      "type": "InputBusinessRecipients"
    },
    {
      "id": 554733559,
      "predicate": "businessRecipients",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "existing_chats",
          "type": "flags.0?true"
        },
        {
          "name": "new_chats",
          "type": "flags.1?true"
        },
        {
          "name": "contacts",
          "type": "flags.2?true"
        },
        {
          "name": "non_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "exclude_selected",
          "type": "flags.5?true"
        },
        {
          "name": "users",
          "type": "flags.4?Vector<long>"
        }
      ],
      "type": "BusinessRecipients"
    },
    {
      "id": 3384402617,
      "predicate": "businessAwayMessageScheduleAlways",
      "params": [],
      "type": "BusinessAwayMessageSchedule"
    },
    {
      "id": 3287479553,
      "predicate": "businessAwayMessageScheduleOutsideWorkHours",
      "params": [],
      "type": "BusinessAwayMessageSchedule"
    },
    {
      "id": 3427638988,
      "predicate": "businessAwayMessageScheduleCustom",
      "params": [
        {
          "name": "start_date",
          "type": "int"
        },
        {
          "name": "end_date",
          "type": "int"
        }
      ],
      "type": "BusinessAwayMessageSchedule"
    },
    {
      "id": 26528571,
      "predicate": "inputBusinessGreetingMessage",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "recipients",
          "type": "InputBusinessRecipients"
        },
        {
          "name": "no_activity_days",
          "type": "int"
        }
      ],
      "type": "InputBusinessGreetingMessage"
    },
    {
      "id": 3843664811,
      "predicate": "businessGreetingMessage",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "recipients",
          "type": "BusinessRecipients"
        },
        {
          "name": "no_activity_days",
          "type": "int"
        }
      ],
      "type": "BusinessGreetingMessage"
    },
    {
      "id": 2200008160,
      "predicate": "inputBusinessAwayMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "offline_only",
          "type": "flags.0?true"
        },
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "schedule",
          "type": "BusinessAwayMessageSchedule"
        },
        {
          "name": "recipients",
          "type": "InputBusinessRecipients"
        }
      ],
      "type": "InputBusinessAwayMessage"
    },
    {
      "id": 4011158108,
      "predicate": "businessAwayMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "offline_only",
          "type": "flags.0?true"
        },
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "schedule",
          "type": "BusinessAwayMessageSchedule"
        },
        {
          "name": "recipients",
          "type": "BusinessRecipients"
        }
      ],
      "type": "BusinessAwayMessage"
    },
    {
      "id": 4287793653,
      "predicate": "timezone",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "utc_offset",
          "type": "int"
        }
      ],
      "type": "Timezone"
    },
    {
      "id": 2533820620,
      "predicate": "help.timezonesListNotModified",
      "params": [],
      "type": "help.TimezonesList"
    },
    {
      "id": 2071260529,
      "predicate": "help.timezonesList",
      "params": [
        {
          "name": "timezones",
          "type": "Vector<Timezone>"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.TimezonesList"
    },
    {
      "id": 110563371,
      "predicate": "quickReply",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "shortcut",
          "type": "string"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "QuickReply"
    },
    {
      "id": 609840449,
      "predicate": "inputQuickReplyShortcut",
      "params": [
        {
          "name": "shortcut",
          "type": "string"
        }
      ],
      "type": "InputQuickReplyShortcut"
    },
    {
      "id": 18418929,
      "predicate": "inputQuickReplyShortcutId",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        }
      ],
      "type": "InputQuickReplyShortcut"
    },
    {
      "id": 3331155605,
      "predicate": "messages.quickReplies",
      "params": [
        {
          "name": "quick_replies",
          "type": "Vector<QuickReply>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.QuickReplies"
    },
    {
      "id": 1603398491,
      "predicate": "messages.quickRepliesNotModified",
      "params": [],
      "type": "messages.QuickReplies"
    },
    {
      "id": 3171321345,
      "predicate": "connectedBot",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_reply",
          "type": "flags.0?true"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "recipients",
          "type": "BusinessBotRecipients"
        }
      ],
      "type": "ConnectedBot"
    },
    {
      "id": 400029819,
      "predicate": "account.connectedBots",
      "params": [
        {
          "name": "connected_bots",
          "type": "Vector<ConnectedBot>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.ConnectedBots"
    },
    {
      "id": 718878489,
      "predicate": "messages.dialogFilters",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "tags_enabled",
          "type": "flags.0?true"
        },
        {
          "name": "filters",
          "type": "Vector<DialogFilter>"
        }
      ],
      "type": "messages.DialogFilters"
    },
    {
      "id": 1821253126,
      "predicate": "birthday",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "day",
          "type": "int"
        },
        {
          "name": "month",
          "type": "int"
        },
        {
          "name": "year",
          "type": "flags.0?int"
        }
      ],
      "type": "Birthday"
    },
    {
      "id": 2305045428,
      "predicate": "botBusinessConnection",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_reply",
          "type": "flags.0?true"
        },
        {
          "name": "disabled",
          "type": "flags.1?true"
        },
        {
          "name": "connection_id",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "BotBusinessConnection"
    },
    {
      "id": 163867085,
      "predicate": "inputBusinessIntro",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "sticker",
          "type": "flags.0?InputDocument"
        }
      ],
      "type": "InputBusinessIntro"
    },
    {
      "id": 1510606445,
      "predicate": "businessIntro",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "sticker",
          "type": "flags.0?Document"
        }
      ],
      "type": "BusinessIntro"
    },
    {
      "id": 4211040925,
      "predicate": "messages.myStickers",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.MyStickers"
    },
    {
      "id": 3818152105,
      "predicate": "inputCollectibleUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "InputCollectible"
    },
    {
      "id": 2732725412,
      "predicate": "inputCollectiblePhone",
      "params": [
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "InputCollectible"
    },
    {
      "id": 1857945489,
      "predicate": "fragment.collectibleInfo",
      "params": [
        {
          "name": "purchase_date",
          "type": "int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "crypto_currency",
          "type": "string"
        },
        {
          "name": "crypto_amount",
          "type": "long"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "fragment.CollectibleInfo"
    },
    {
      "id": 3303379486,
      "predicate": "inputBusinessBotRecipients",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "existing_chats",
          "type": "flags.0?true"
        },
        {
          "name": "new_chats",
          "type": "flags.1?true"
        },
        {
          "name": "contacts",
          "type": "flags.2?true"
        },
        {
          "name": "non_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "exclude_selected",
          "type": "flags.5?true"
        },
        {
          "name": "users",
          "type": "flags.4?Vector<InputUser>"
        },
        {
          "name": "exclude_users",
          "type": "flags.6?Vector<InputUser>"
        }
      ],
      "type": "InputBusinessBotRecipients"
    },
    {
      "id": 3096245107,
      "predicate": "businessBotRecipients",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "existing_chats",
          "type": "flags.0?true"
        },
        {
          "name": "new_chats",
          "type": "flags.1?true"
        },
        {
          "name": "contacts",
          "type": "flags.2?true"
        },
        {
          "name": "non_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "exclude_selected",
          "type": "flags.5?true"
        },
        {
          "name": "users",
          "type": "flags.4?Vector<long>"
        },
        {
          "name": "exclude_users",
          "type": "flags.6?Vector<long>"
        }
      ],
      "type": "BusinessBotRecipients"
    },
    {
      "id": 496600883,
      "predicate": "contactBirthday",
      "params": [
        {
          "name": "contact_id",
          "type": "long"
        },
        {
          "name": "birthday",
          "type": "Birthday"
        }
      ],
      "type": "ContactBirthday"
    },
    {
      "id": 290452237,
      "predicate": "contacts.contactBirthdays",
      "params": [
        {
          "name": "contacts",
          "type": "Vector<ContactBirthday>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.ContactBirthdays"
    },
    {
      "id": 1653379620,
      "predicate": "missingInvitee",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "premium_would_allow_invite",
          "type": "flags.0?true"
        },
        {
          "name": "premium_required_for_pm",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "long"
        }
      ],
      "type": "MissingInvitee"
    },
    {
      "id": 2136862630,
      "predicate": "messages.invitedUsers",
      "params": [
        {
          "name": "updates",
          "type": "Updates"
        },
        {
          "name": "missing_invitees",
          "type": "Vector<MissingInvitee>"
        }
      ],
      "type": "messages.InvitedUsers"
    },
    {
      "id": 292003751,
      "predicate": "inputBusinessChatLink",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.0?Vector<MessageEntity>"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        }
      ],
      "type": "InputBusinessChatLink"
    },
    {
      "id": 3031328367,
      "predicate": "businessChatLink",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.0?Vector<MessageEntity>"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "views",
          "type": "int"
        }
      ],
      "type": "BusinessChatLink"
    },
    {
      "id": 3963855569,
      "predicate": "account.businessChatLinks",
      "params": [
        {
          "name": "links",
          "type": "Vector<BusinessChatLink>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.BusinessChatLinks"
    },
    {
      "id": 2586029857,
      "predicate": "account.resolvedBusinessChatLinks",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.0?Vector<MessageEntity>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.ResolvedBusinessChatLinks"
    },
    {
      "id": 3593466986,
      "predicate": "requestedPeerUser",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "long"
        },
        {
          "name": "first_name",
          "type": "flags.0?string"
        },
        {
          "name": "last_name",
          "type": "flags.0?string"
        },
        {
          "name": "username",
          "type": "flags.1?string"
        },
        {
          "name": "photo",
          "type": "flags.2?Photo"
        }
      ],
      "type": "RequestedPeer"
    },
    {
      "id": 1929860175,
      "predicate": "requestedPeerChat",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "photo",
          "type": "flags.2?Photo"
        }
      ],
      "type": "RequestedPeer"
    },
    {
      "id": 2342781924,
      "predicate": "requestedPeerChannel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "username",
          "type": "flags.1?string"
        },
        {
          "name": "photo",
          "type": "flags.2?Photo"
        }
      ],
      "type": "RequestedPeer"
    },
    {
      "id": 1124938064,
      "predicate": "sponsoredMessageReportOption",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "SponsoredMessageReportOption"
    },
    {
      "id": 2221907522,
      "predicate": "channels.sponsoredMessageReportResultChooseOption",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "options",
          "type": "Vector<SponsoredMessageReportOption>"
        }
      ],
      "type": "channels.SponsoredMessageReportResult"
    },
    {
      "id": 1044107055,
      "predicate": "channels.sponsoredMessageReportResultAdsHidden",
      "params": [],
      "type": "channels.SponsoredMessageReportResult"
    },
    {
      "id": 2910423113,
      "predicate": "channels.sponsoredMessageReportResultReported",
      "params": [],
      "type": "channels.SponsoredMessageReportResult"
    },
    {
      "id": 1409802903,
      "predicate": "stats.broadcastRevenueStats",
      "params": [
        {
          "name": "top_hours_graph",
          "type": "StatsGraph"
        },
        {
          "name": "revenue_graph",
          "type": "StatsGraph"
        },
        {
          "name": "balances",
          "type": "BroadcastRevenueBalances"
        },
        {
          "name": "usd_rate",
          "type": "double"
        }
      ],
      "type": "stats.BroadcastRevenueStats"
    },
    {
      "id": 3966080823,
      "predicate": "stats.broadcastRevenueWithdrawalUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "stats.BroadcastRevenueWithdrawalUrl"
    },
    {
      "id": 1434332356,
      "predicate": "broadcastRevenueTransactionProceeds",
      "params": [
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "from_date",
          "type": "int"
        },
        {
          "name": "to_date",
          "type": "int"
        }
      ],
      "type": "BroadcastRevenueTransaction"
    },
    {
      "id": 1515784568,
      "predicate": "broadcastRevenueTransactionWithdrawal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pending",
          "type": "flags.0?true"
        },
        {
          "name": "failed",
          "type": "flags.2?true"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "transaction_date",
          "type": "flags.1?int"
        },
        {
          "name": "transaction_url",
          "type": "flags.1?string"
        }
      ],
      "type": "BroadcastRevenueTransaction"
    },
    {
      "id": 1121127726,
      "predicate": "broadcastRevenueTransactionRefund",
      "params": [
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "provider",
          "type": "string"
        }
      ],
      "type": "BroadcastRevenueTransaction"
    },
    {
      "id": 2266334310,
      "predicate": "stats.broadcastRevenueTransactions",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "transactions",
          "type": "Vector<BroadcastRevenueTransaction>"
        }
      ],
      "type": "stats.BroadcastRevenueTransactions"
    },
    {
      "id": 3133384218,
      "predicate": "reactionNotificationsFromContacts",
      "params": [],
      "type": "ReactionNotificationsFrom"
    },
    {
      "id": 1268654752,
      "predicate": "reactionNotificationsFromAll",
      "params": [],
      "type": "ReactionNotificationsFrom"
    },
    {
      "id": 1457736048,
      "predicate": "reactionsNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "messages_notify_from",
          "type": "flags.0?ReactionNotificationsFrom"
        },
        {
          "name": "stories_notify_from",
          "type": "flags.1?ReactionNotificationsFrom"
        },
        {
          "name": "sound",
          "type": "NotificationSound"
        },
        {
          "name": "show_previews",
          "type": "Bool"
        }
      ],
      "type": "ReactionsNotifySettings"
    },
    {
      "id": 3288297959,
      "predicate": "broadcastRevenueBalances",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "withdrawal_enabled",
          "type": "flags.0?true"
        },
        {
          "name": "current_balance",
          "type": "long"
        },
        {
          "name": "available_balance",
          "type": "long"
        },
        {
          "name": "overall_revenue",
          "type": "long"
        }
      ],
      "type": "BroadcastRevenueBalances"
    },
    {
      "id": 2479088254,
      "predicate": "availableEffect",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "premium_required",
          "type": "flags.2?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "static_icon_id",
          "type": "flags.0?long"
        },
        {
          "name": "effect_sticker_id",
          "type": "long"
        },
        {
          "name": "effect_animation_id",
          "type": "flags.1?long"
        }
      ],
      "type": "AvailableEffect"
    },
    {
      "id": 3522009691,
      "predicate": "messages.availableEffectsNotModified",
      "params": [],
      "type": "messages.AvailableEffects"
    },
    {
      "id": 3185271150,
      "predicate": "messages.availableEffects",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "effects",
          "type": "Vector<AvailableEffect>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.AvailableEffects"
    },
    {
      "id": 3097230543,
      "predicate": "factCheck",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "need_check",
          "type": "flags.0?true"
        },
        {
          "name": "country",
          "type": "flags.1?string"
        },
        {
          "name": "text",
          "type": "flags.1?TextWithEntities"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "FactCheck"
    },
    {
      "id": 2515714020,
      "predicate": "starsTransactionPeerUnsupported",
      "params": [],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 3025646453,
      "predicate": "starsTransactionPeerAppStore",
      "params": [],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 2069236235,
      "predicate": "starsTransactionPeerPlayMarket",
      "params": [],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 621656824,
      "predicate": "starsTransactionPeerPremiumBot",
      "params": [],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 3912227074,
      "predicate": "starsTransactionPeerFragment",
      "params": [],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 3624771933,
      "predicate": "starsTransactionPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 1617438738,
      "predicate": "starsTransactionPeerAds",
      "params": [],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 4184308397,
      "predicate": "starsTransactionPeerAPI",
      "params": [],
      "type": "StarsTransactionPeer"
    },
    {
      "id": 198776256,
      "predicate": "starsTopupOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "extended",
          "type": "flags.1?true"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "store_product",
          "type": "flags.0?string"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "StarsTopupOption"
    },
    {
      "id": 1692387622,
      "predicate": "starsTransaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "refund",
          "type": "flags.3?true"
        },
        {
          "name": "pending",
          "type": "flags.4?true"
        },
        {
          "name": "failed",
          "type": "flags.6?true"
        },
        {
          "name": "gift",
          "type": "flags.10?true"
        },
        {
          "name": "reaction",
          "type": "flags.11?true"
        },
        {
          "name": "stargift_upgrade",
          "type": "flags.18?true"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "stars",
          "type": "StarsAmount"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "StarsTransactionPeer"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "description",
          "type": "flags.1?string"
        },
        {
          "name": "photo",
          "type": "flags.2?WebDocument"
        },
        {
          "name": "transaction_date",
          "type": "flags.5?int"
        },
        {
          "name": "transaction_url",
          "type": "flags.5?string"
        },
        {
          "name": "bot_payload",
          "type": "flags.7?bytes"
        },
        {
          "name": "msg_id",
          "type": "flags.8?int"
        },
        {
          "name": "extended_media",
          "type": "flags.9?Vector<MessageMedia>"
        },
        {
          "name": "subscription_period",
          "type": "flags.12?int"
        },
        {
          "name": "giveaway_post_id",
          "type": "flags.13?int"
        },
        {
          "name": "stargift",
          "type": "flags.14?StarGift"
        },
        {
          "name": "floodskip_number",
          "type": "flags.15?int"
        },
        {
          "name": "starref_commission_permille",
          "type": "flags.16?int"
        },
        {
          "name": "starref_peer",
          "type": "flags.17?Peer"
        },
        {
          "name": "starref_amount",
          "type": "flags.17?StarsAmount"
        }
      ],
      "type": "StarsTransaction"
    },
    {
      "id": 1822222573,
      "predicate": "payments.starsStatus",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "balance",
          "type": "StarsAmount"
        },
        {
          "name": "subscriptions",
          "type": "flags.1?Vector<StarsSubscription>"
        },
        {
          "name": "subscriptions_next_offset",
          "type": "flags.2?string"
        },
        {
          "name": "subscriptions_missing_balance",
          "type": "flags.4?long"
        },
        {
          "name": "history",
          "type": "flags.3?Vector<StarsTransaction>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.StarsStatus"
    },
    {
      "id": 3900361664,
      "predicate": "foundStory",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "story",
          "type": "StoryItem"
        }
      ],
      "type": "FoundStory"
    },
    {
      "id": 3806230327,
      "predicate": "stories.foundStories",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "stories",
          "type": "Vector<FoundStory>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "stories.FoundStories"
    },
    {
      "id": 3729546643,
      "predicate": "geoPointAddress",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "country_iso2",
          "type": "string"
        },
        {
          "name": "state",
          "type": "flags.0?string"
        },
        {
          "name": "city",
          "type": "flags.1?string"
        },
        {
          "name": "street",
          "type": "flags.2?string"
        }
      ],
      "type": "GeoPointAddress"
    },
    {
      "id": 4273886353,
      "predicate": "starsRevenueStatus",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "withdrawal_enabled",
          "type": "flags.0?true"
        },
        {
          "name": "current_balance",
          "type": "StarsAmount"
        },
        {
          "name": "available_balance",
          "type": "StarsAmount"
        },
        {
          "name": "overall_revenue",
          "type": "StarsAmount"
        },
        {
          "name": "next_withdrawal_at",
          "type": "flags.1?int"
        }
      ],
      "type": "StarsRevenueStatus"
    },
    {
      "id": 3375085371,
      "predicate": "payments.starsRevenueStats",
      "params": [
        {
          "name": "revenue_graph",
          "type": "StatsGraph"
        },
        {
          "name": "status",
          "type": "StarsRevenueStatus"
        },
        {
          "name": "usd_rate",
          "type": "double"
        }
      ],
      "type": "payments.StarsRevenueStats"
    },
    {
      "id": 497778871,
      "predicate": "payments.starsRevenueWithdrawalUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.StarsRevenueWithdrawalUrl"
    },
    {
      "id": 961445665,
      "predicate": "payments.starsRevenueAdsAccountUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.StarsRevenueAdsAccountUrl"
    },
    {
      "id": 543876817,
      "predicate": "inputStarsTransaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "refund",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "string"
        }
      ],
      "type": "InputStarsTransaction"
    },
    {
      "id": 1577421297,
      "predicate": "starsGiftOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "extended",
          "type": "flags.1?true"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "store_product",
          "type": "flags.0?string"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "StarsGiftOption"
    },
    {
      "id": 428978491,
      "predicate": "bots.popularAppBots",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "bots.PopularAppBots"
    },
    {
      "id": 602479523,
      "predicate": "botPreviewMedia",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "media",
          "type": "MessageMedia"
        }
      ],
      "type": "BotPreviewMedia"
    },
    {
      "id": 212278628,
      "predicate": "bots.previewInfo",
      "params": [
        {
          "name": "media",
          "type": "Vector<BotPreviewMedia>"
        },
        {
          "name": "lang_codes",
          "type": "Vector<string>"
        }
      ],
      "type": "bots.PreviewInfo"
    },
    {
      "id": 88173912,
      "predicate": "starsSubscriptionPricing",
      "params": [
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "StarsSubscriptionPricing"
    },
    {
      "id": 779004698,
      "predicate": "starsSubscription",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "canceled",
          "type": "flags.0?true"
        },
        {
          "name": "can_refulfill",
          "type": "flags.1?true"
        },
        {
          "name": "missing_balance",
          "type": "flags.2?true"
        },
        {
          "name": "bot_canceled",
          "type": "flags.7?true"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "until_date",
          "type": "int"
        },
        {
          "name": "pricing",
          "type": "StarsSubscriptionPricing"
        },
        {
          "name": "chat_invite_hash",
          "type": "flags.3?string"
        },
        {
          "name": "title",
          "type": "flags.4?string"
        },
        {
          "name": "photo",
          "type": "flags.5?WebDocument"
        },
        {
          "name": "invoice_slug",
          "type": "flags.6?string"
        }
      ],
      "type": "StarsSubscription"
    },
    {
      "id": 1269016922,
      "predicate": "messageReactor",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "top",
          "type": "flags.0?true"
        },
        {
          "name": "my",
          "type": "flags.1?true"
        },
        {
          "name": "anonymous",
          "type": "flags.2?true"
        },
        {
          "name": "peer_id",
          "type": "flags.3?Peer"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "MessageReactor"
    },
    {
      "id": 2496562474,
      "predicate": "starsGiveawayOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "extended",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "yearly_boosts",
          "type": "int"
        },
        {
          "name": "store_product",
          "type": "flags.2?string"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "winners",
          "type": "Vector<StarsGiveawayWinnersOption>"
        }
      ],
      "type": "StarsGiveawayOption"
    },
    {
      "id": 1411605001,
      "predicate": "starsGiveawayWinnersOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "default",
          "type": "flags.0?true"
        },
        {
          "name": "users",
          "type": "int"
        },
        {
          "name": "per_user_stars",
          "type": "long"
        }
      ],
      "type": "StarsGiveawayWinnersOption"
    },
    {
      "id": 46953416,
      "predicate": "starGift",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "limited",
          "type": "flags.0?true"
        },
        {
          "name": "sold_out",
          "type": "flags.1?true"
        },
        {
          "name": "birthday",
          "type": "flags.2?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "sticker",
          "type": "Document"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "availability_remains",
          "type": "flags.0?int"
        },
        {
          "name": "availability_total",
          "type": "flags.0?int"
        },
        {
          "name": "convert_stars",
          "type": "long"
        },
        {
          "name": "first_sale_date",
          "type": "flags.1?int"
        },
        {
          "name": "last_sale_date",
          "type": "flags.1?int"
        },
        {
          "name": "upgrade_stars",
          "type": "flags.3?long"
        }
      ],
      "type": "StarGift"
    },
    {
      "id": 1549979985,
      "predicate": "starGiftUnique",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "num",
          "type": "int"
        },
        {
          "name": "owner_id",
          "type": "flags.0?Peer"
        },
        {
          "name": "owner_name",
          "type": "flags.1?string"
        },
        {
          "name": "owner_address",
          "type": "flags.2?string"
        },
        {
          "name": "attributes",
          "type": "Vector<StarGiftAttribute>"
        },
        {
          "name": "availability_issued",
          "type": "int"
        },
        {
          "name": "availability_total",
          "type": "int"
        },
        {
          "name": "gift_address",
          "type": "flags.3?string"
        }
      ],
      "type": "StarGift"
    },
    {
      "id": 2743640936,
      "predicate": "payments.starGiftsNotModified",
      "params": [],
      "type": "payments.StarGifts"
    },
    {
      "id": 2417396202,
      "predicate": "payments.starGifts",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "gifts",
          "type": "Vector<StarGift>"
        }
      ],
      "type": "payments.StarGifts"
    },
    {
      "id": 2030298073,
      "predicate": "messageReportOption",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "MessageReportOption"
    },
    {
      "id": 4041531574,
      "predicate": "reportResultChooseOption",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "options",
          "type": "Vector<MessageReportOption>"
        }
      ],
      "type": "ReportResult"
    },
    {
      "id": 1862904881,
      "predicate": "reportResultAddComment",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "optional",
          "type": "flags.0?true"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "ReportResult"
    },
    {
      "id": 2377333835,
      "predicate": "reportResultReported",
      "params": [],
      "type": "ReportResult"
    },
    {
      "id": 2395931921,
      "predicate": "messages.botPreparedInlineMessage",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "expire_date",
          "type": "int"
        }
      ],
      "type": "messages.BotPreparedInlineMessage"
    },
    {
      "id": 4283920525,
      "predicate": "messages.preparedInlineMessage",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "result",
          "type": "BotInlineResult"
        },
        {
          "name": "peer_types",
          "type": "Vector<InlineQueryPeerType>"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.PreparedInlineMessage"
    },
    {
      "id": 3382384976,
      "predicate": "botAppSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "placeholder_path",
          "type": "flags.0?bytes"
        },
        {
          "name": "background_color",
          "type": "flags.1?int"
        },
        {
          "name": "background_dark_color",
          "type": "flags.2?int"
        },
        {
          "name": "header_color",
          "type": "flags.3?int"
        },
        {
          "name": "header_dark_color",
          "type": "flags.4?int"
        }
      ],
      "type": "BotAppSettings"
    },
    {
      "id": 3708577522,
      "predicate": "starRefProgram",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "commission_permille",
          "type": "int"
        },
        {
          "name": "duration_months",
          "type": "flags.0?int"
        },
        {
          "name": "end_date",
          "type": "flags.1?int"
        },
        {
          "name": "daily_revenue_per_user",
          "type": "flags.2?StarsAmount"
        }
      ],
      "type": "StarRefProgram"
    },
    {
      "id": 429997937,
      "predicate": "connectedBotStarRef",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.1?true"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "commission_permille",
          "type": "int"
        },
        {
          "name": "duration_months",
          "type": "flags.0?int"
        },
        {
          "name": "participants",
          "type": "long"
        },
        {
          "name": "revenue",
          "type": "long"
        }
      ],
      "type": "ConnectedBotStarRef"
    },
    {
      "id": 2564155933,
      "predicate": "payments.connectedStarRefBots",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "connected_bots",
          "type": "Vector<ConnectedBotStarRef>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.ConnectedStarRefBots"
    },
    {
      "id": 3033913433,
      "predicate": "payments.suggestedStarRefBots",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "suggested_bots",
          "type": "Vector<StarRefProgram>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        }
      ],
      "type": "payments.SuggestedStarRefBots"
    },
    {
      "id": 3149313187,
      "predicate": "starsAmount",
      "params": [
        {
          "name": "amount",
          "type": "long"
        },
        {
          "name": "nanos",
          "type": "int"
        }
      ],
      "type": "StarsAmount"
    },
    {
      "id": 1611711796,
      "predicate": "messages.foundStickersNotModified",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "next_offset",
          "type": "flags.0?int"
        }
      ],
      "type": "messages.FoundStickers"
    },
    {
      "id": 2194268816,
      "predicate": "messages.foundStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "next_offset",
          "type": "flags.0?int"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.FoundStickers"
    },
    {
      "id": 2966251031,
      "predicate": "botVerifierSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_modify_custom_description",
          "type": "flags.1?true"
        },
        {
          "name": "icon",
          "type": "long"
        },
        {
          "name": "company",
          "type": "string"
        },
        {
          "name": "custom_description",
          "type": "flags.0?string"
        }
      ],
      "type": "BotVerifierSettings"
    },
    {
      "id": 4181513308,
      "predicate": "botVerification",
      "params": [
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "icon",
          "type": "long"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "BotVerification"
    },
    {
      "id": 970559507,
      "predicate": "starGiftAttributeModel",
      "params": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "document",
          "type": "Document"
        },
        {
          "name": "rarity_permille",
          "type": "int"
        }
      ],
      "type": "StarGiftAttribute"
    },
    {
      "id": 330104601,
      "predicate": "starGiftAttributePattern",
      "params": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "document",
          "type": "Document"
        },
        {
          "name": "rarity_permille",
          "type": "int"
        }
      ],
      "type": "StarGiftAttribute"
    },
    {
      "id": 2485589858,
      "predicate": "starGiftAttributeBackdrop",
      "params": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "center_color",
          "type": "int"
        },
        {
          "name": "edge_color",
          "type": "int"
        },
        {
          "name": "pattern_color",
          "type": "int"
        },
        {
          "name": "text_color",
          "type": "int"
        },
        {
          "name": "rarity_permille",
          "type": "int"
        }
      ],
      "type": "StarGiftAttribute"
    },
    {
      "id": 3770675820,
      "predicate": "starGiftAttributeOriginalDetails",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sender_id",
          "type": "flags.0?Peer"
        },
        {
          "name": "recipient_id",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "message",
          "type": "flags.1?TextWithEntities"
        }
      ],
      "type": "StarGiftAttribute"
    },
    {
      "id": 377215243,
      "predicate": "payments.starGiftUpgradePreview",
      "params": [
        {
          "name": "sample_attributes",
          "type": "Vector<StarGiftAttribute>"
        }
      ],
      "type": "payments.StarGiftUpgradePreview"
    },
    {
      "id": 1658259128,
      "predicate": "users.users",
      "params": [
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "users.Users"
    },
    {
      "id": 828000628,
      "predicate": "users.usersSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "users.Users"
    },
    {
      "id": 3399677451,
      "predicate": "payments.uniqueStarGift",
      "params": [
        {
          "name": "gift",
          "type": "StarGift"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.UniqueStarGift"
    },
    {
      "id": 3040774945,
      "predicate": "messages.webPagePreview",
      "params": [
        {
          "name": "media",
          "type": "MessageMedia"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.WebPagePreview"
    },
    {
      "id": 1616305061,
      "predicate": "savedStarGift",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name_hidden",
          "type": "flags.0?true"
        },
        {
          "name": "unsaved",
          "type": "flags.5?true"
        },
        {
          "name": "refunded",
          "type": "flags.9?true"
        },
        {
          "name": "can_upgrade",
          "type": "flags.10?true"
        },
        {
          "name": "from_id",
          "type": "flags.1?Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "gift",
          "type": "StarGift"
        },
        {
          "name": "message",
          "type": "flags.2?TextWithEntities"
        },
        {
          "name": "msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "saved_id",
          "type": "flags.11?long"
        },
        {
          "name": "convert_stars",
          "type": "flags.4?long"
        },
        {
          "name": "upgrade_stars",
          "type": "flags.6?long"
        },
        {
          "name": "can_export_at",
          "type": "flags.7?int"
        },
        {
          "name": "transfer_stars",
          "type": "flags.8?long"
        }
      ],
      "type": "SavedStarGift"
    },
    {
      "id": 2515765681,
      "predicate": "payments.savedStarGifts",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "chat_notifications_enabled",
          "type": "flags.1?Bool"
        },
        {
          "name": "gifts",
          "type": "Vector<SavedStarGift>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.SavedStarGifts"
    },
    {
      "id": 1764202389,
      "predicate": "inputSavedStarGiftUser",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "InputSavedStarGift"
    },
    {
      "id": 4043418239,
      "predicate": "inputSavedStarGiftChat",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "saved_id",
          "type": "long"
        }
      ],
      "type": "InputSavedStarGift"
    },
    {
      "id": 2225748636,
      "predicate": "payments.starGiftWithdrawalUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.StarGiftWithdrawalUrl"
    },
    {
      "id": 543872158,
      "predicate": "paidReactionPrivacyDefault",
      "params": [],
      "type": "PaidReactionPrivacy"
    },
    {
      "id": 520887001,
      "predicate": "paidReactionPrivacyAnonymous",
      "params": [],
      "type": "PaidReactionPrivacy"
    },
    {
      "id": 3698130160,
      "predicate": "paidReactionPrivacyPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "PaidReactionPrivacy"
    }
  ],
  "methods": [
    {
      "id": 3416209197,
      "method": "invokeAfterMsg",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 1036301552,
      "method": "invokeAfterMsgs",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 3251461801,
      "method": "initConnection",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "system_lang_code",
          "type": "string"
        },
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "proxy",
          "type": "flags.0?InputClientProxy"
        },
        {
          "name": "params",
          "type": "flags.1?JSONValue"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 3667594509,
      "method": "invokeWithLayer",
      "params": [
        {
          "name": "layer",
          "type": "int"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 3214170551,
      "method": "invokeWithoutUpdates",
      "params": [
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 911373810,
      "method": "invokeWithMessagesRange",
      "params": [
        {
          "name": "range",
          "type": "MessageRange"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 2896821550,
      "method": "invokeWithTakeout",
      "params": [
        {
          "name": "takeout_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 3710427022,
      "method": "invokeWithBusinessConnection",
      "params": [
        {
          "name": "connection_id",
          "type": "string"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 502868356,
      "method": "invokeWithGooglePlayIntegrity",
      "params": [
        {
          "name": "nonce",
          "type": "string"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 229528824,
      "method": "invokeWithApnsSecret",
      "params": [
        {
          "name": "nonce",
          "type": "string"
        },
        {
          "name": "secret",
          "type": "string"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 2914717588,
      "method": "invokeWithReCaptcha",
      "params": [
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 2792825935,
      "method": "auth.sendCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 2865215255,
      "method": "auth.signUp",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_joined_notifications",
          "type": "flags.0?true"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 2371004753,
      "method": "auth.signIn",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "flags.0?string"
        },
        {
          "name": "email_verification",
          "type": "flags.1?EmailVerification"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 1047706137,
      "method": "auth.logOut",
      "params": [],
      "type": "auth.LoggedOut"
    },
    {
      "id": 2678787354,
      "method": "auth.resetAuthorizations",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3854565325,
      "method": "auth.exportAuthorization",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    {
      "id": 2776268205,
      "method": "auth.importAuthorization",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3453233669,
      "method": "auth.bindTempAuthKey",
      "params": [
        {
          "name": "perm_auth_key_id",
          "type": "long"
        },
        {
          "name": "nonce",
          "type": "long"
        },
        {
          "name": "expires_at",
          "type": "int"
        },
        {
          "name": "encrypted_message",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1738800940,
      "method": "auth.importBotAuthorization",
      "params": [
        {
          "name": "flags",
          "type": "int"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "bot_auth_token",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3515567382,
      "method": "auth.checkPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3633822822,
      "method": "auth.requestPasswordRecovery",
      "params": [],
      "type": "auth.PasswordRecovery"
    },
    {
      "id": 923364464,
      "method": "auth.recoverPassword",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "new_settings",
          "type": "flags.0?account.PasswordInputSettings"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3403969827,
      "method": "auth.resendCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "reason",
          "type": "flags.0?string"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 520357240,
      "method": "auth.cancelCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2387124616,
      "method": "auth.dropTempAuthKeys",
      "params": [
        {
          "name": "except_auth_keys",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3084944894,
      "method": "auth.exportLoginToken",
      "params": [
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "except_ids",
          "type": "Vector<long>"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 2511101156,
      "method": "auth.importLoginToken",
      "params": [
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 3902057805,
      "method": "auth.acceptLoginToken",
      "params": [
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "Authorization"
    },
    {
      "id": 221691769,
      "method": "auth.checkRecoveryPassword",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 767062953,
      "method": "auth.importWebTokenAuthorization",
      "params": [
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "web_auth_token",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 2386109982,
      "method": "auth.requestFirebaseSms",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "safety_net_token",
          "type": "flags.0?string"
        },
        {
          "name": "play_integrity_token",
          "type": "flags.2?string"
        },
        {
          "name": "ios_push_secret",
          "type": "flags.1?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2123760019,
      "method": "auth.resetLoginEmail",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 3416125430,
      "method": "auth.reportMissingCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "mnc",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3968205178,
      "method": "account.registerDevice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_muted",
          "type": "flags.0?true"
        },
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "app_sandbox",
          "type": "Bool"
        },
        {
          "name": "secret",
          "type": "bytes"
        },
        {
          "name": "other_uids",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1779249670,
      "method": "account.unregisterDevice",
      "params": [
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "other_uids",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2227067795,
      "method": "account.updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        },
        {
          "name": "settings",
          "type": "InputPeerNotifySettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 313765169,
      "method": "account.getNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        }
      ],
      "type": "PeerNotifySettings"
    },
    {
      "id": 3682473799,
      "method": "account.resetNotifySettings",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2018596725,
      "method": "account.updateProfile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "first_name",
          "type": "flags.0?string"
        },
        {
          "name": "last_name",
          "type": "flags.1?string"
        },
        {
          "name": "about",
          "type": "flags.2?string"
        }
      ],
      "type": "User"
    },
    {
      "id": 1713919532,
      "method": "account.updateStatus",
      "params": [
        {
          "name": "offline",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 127302966,
      "method": "account.getWallPapers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.WallPapers"
    },
    {
      "id": 3317316998,
      "method": "account.reportPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 655677548,
      "method": "account.checkUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1040964988,
      "method": "account.updateUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "User"
    },
    {
      "id": 3671837008,
      "method": "account.getPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": 3388480744,
      "method": "account.setPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector<InputPrivacyRule>"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": 2730545012,
      "method": "account.deleteAccount",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reason",
          "type": "string"
        },
        {
          "name": "password",
          "type": "flags.0?InputCheckPasswordSRP"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 150761757,
      "method": "account.getAccountTTL",
      "params": [],
      "type": "AccountDaysTTL"
    },
    {
      "id": 608323678,
      "method": "account.setAccountTTL",
      "params": [
        {
          "name": "ttl",
          "type": "AccountDaysTTL"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2186758885,
      "method": "account.sendChangePhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 1891839707,
      "method": "account.changePhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "User"
    },
    {
      "id": 954152242,
      "method": "account.updateDeviceLocked",
      "params": [
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3810574680,
      "method": "account.getAuthorizations",
      "params": [],
      "type": "account.Authorizations"
    },
    {
      "id": 3749180348,
      "method": "account.resetAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1418342645,
      "method": "account.getPassword",
      "params": [],
      "type": "account.Password"
    },
    {
      "id": 2631199481,
      "method": "account.getPasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "account.PasswordSettings"
    },
    {
      "id": 2778402863,
      "method": "account.updatePasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "new_settings",
          "type": "account.PasswordInputSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 457157256,
      "method": "account.sendConfirmPhoneCode",
      "params": [
        {
          "name": "hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 1596029123,
      "method": "account.confirmPhone",
      "params": [
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1151208273,
      "method": "account.getTmpPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    {
      "id": 405695855,
      "method": "account.getWebAuthorizations",
      "params": [],
      "type": "account.WebAuthorizations"
    },
    {
      "id": 755087855,
      "method": "account.resetWebAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1747789204,
      "method": "account.resetWebAuthorizations",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2995305597,
      "method": "account.getAllSecureValues",
      "params": [],
      "type": "Vector<SecureValue>"
    },
    {
      "id": 1936088002,
      "method": "account.getSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "Vector<SecureValue>"
    },
    {
      "id": 2308956957,
      "method": "account.saveSecureValue",
      "params": [
        {
          "name": "value",
          "type": "InputSecureValue"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureValue"
    },
    {
      "id": 3095444555,
      "method": "account.deleteSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2838059386,
      "method": "account.getAuthorizationForm",
      "params": [
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    {
      "id": 4092415091,
      "method": "account.acceptAuthorization",
      "params": [
        {
          "name": "bot_id",
          "type": "long"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        },
        {
          "name": "value_hashes",
          "type": "Vector<SecureValueHash>"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2778945273,
      "method": "account.sendVerifyPhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 1305716726,
      "method": "account.verifyPhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2564831163,
      "method": "account.sendVerifyEmailCode",
      "params": [
        {
          "name": "purpose",
          "type": "EmailVerifyPurpose"
        },
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "account.SentEmailCode"
    },
    {
      "id": 53322959,
      "method": "account.verifyEmail",
      "params": [
        {
          "name": "purpose",
          "type": "EmailVerifyPurpose"
        },
        {
          "name": "verification",
          "type": "EmailVerification"
        }
      ],
      "type": "account.EmailVerified"
    },
    {
      "id": 2398350000,
      "method": "account.initTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "contacts",
          "type": "flags.0?true"
        },
        {
          "name": "message_users",
          "type": "flags.1?true"
        },
        {
          "name": "message_chats",
          "type": "flags.2?true"
        },
        {
          "name": "message_megagroups",
          "type": "flags.3?true"
        },
        {
          "name": "message_channels",
          "type": "flags.4?true"
        },
        {
          "name": "files",
          "type": "flags.5?true"
        },
        {
          "name": "file_max_size",
          "type": "flags.5?long"
        }
      ],
      "type": "account.Takeout"
    },
    {
      "id": 489050862,
      "method": "account.finishTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2413762848,
      "method": "account.confirmPasswordEmail",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2055154197,
      "method": "account.resendPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3251361206,
      "method": "account.cancelPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2668087080,
      "method": "account.getContactSignUpNotification",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3488890721,
      "method": "account.setContactSignUpNotification",
      "params": [
        {
          "name": "silent",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1398240377,
      "method": "account.getNotifyExceptions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "compare_sound",
          "type": "flags.1?true"
        },
        {
          "name": "compare_stories",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "flags.0?InputNotifyPeer"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4237155306,
      "method": "account.getWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 3818557187,
      "method": "account.uploadWallPaper",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "for_chat",
          "type": "flags.0?true"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 1817860919,
      "method": "account.saveWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "unsave",
          "type": "Bool"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4276967273,
      "method": "account.installWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3141244932,
      "method": "account.resetWallPapers",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 1457130303,
      "method": "account.getAutoDownloadSettings",
      "params": [],
      "type": "account.AutoDownloadSettings"
    },
    {
      "id": 1995661875,
      "method": "account.saveAutoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "low",
          "type": "flags.0?true"
        },
        {
          "name": "high",
          "type": "flags.1?true"
        },
        {
          "name": "settings",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 473805619,
      "method": "account.uploadTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "thumb",
          "type": "flags.0?InputFile"
        },
        {
          "name": "file_name",
          "type": "string"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    {
      "id": 1697530880,
      "method": "account.createTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "document",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "settings",
          "type": "flags.3?Vector<InputThemeSettings>"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 737414348,
      "method": "account.updateTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "slug",
          "type": "flags.0?string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "document",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "settings",
          "type": "flags.3?Vector<InputThemeSettings>"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 4065792108,
      "method": "account.saveTheme",
      "params": [
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3341269819,
      "method": "account.installTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "theme",
          "type": "flags.1?InputTheme"
        },
        {
          "name": "format",
          "type": "flags.2?string"
        },
        {
          "name": "base_theme",
          "type": "flags.3?BaseTheme"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 978872812,
      "method": "account.getTheme",
      "params": [
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "theme",
          "type": "InputTheme"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 1913054296,
      "method": "account.getThemes",
      "params": [
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.Themes"
    },
    {
      "id": 3044323691,
      "method": "account.setContentSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sensitive_enabled",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2342210990,
      "method": "account.getContentSettings",
      "params": [],
      "type": "account.ContentSettings"
    },
    {
      "id": 1705865692,
      "method": "account.getMultiWallPapers",
      "params": [
        {
          "name": "wallpapers",
          "type": "Vector<InputWallPaper>"
        }
      ],
      "type": "Vector<WallPaper>"
    },
    {
      "id": 3945483510,
      "method": "account.getGlobalPrivacySettings",
      "params": [],
      "type": "GlobalPrivacySettings"
    },
    {
      "id": 517647042,
      "method": "account.setGlobalPrivacySettings",
      "params": [
        {
          "name": "settings",
          "type": "GlobalPrivacySettings"
        }
      ],
      "type": "GlobalPrivacySettings"
    },
    {
      "id": 4203529973,
      "method": "account.reportProfilePhoto",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "photo_id",
          "type": "InputPhoto"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2466827803,
      "method": "account.resetPassword",
      "params": [],
      "type": "account.ResetPasswordResult"
    },
    {
      "id": 1284770294,
      "method": "account.declinePasswordReset",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3594051209,
      "method": "account.getChatThemes",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.Themes"
    },
    {
      "id": 3213466272,
      "method": "account.setAuthorizationTTL",
      "params": [
        {
          "name": "authorization_ttl_days",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1089766498,
      "method": "account.changeAuthorizationSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "confirmed",
          "type": "flags.3?true"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "encrypted_requests_disabled",
          "type": "flags.0?Bool"
        },
        {
          "name": "call_requests_disabled",
          "type": "flags.1?Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3784319624,
      "method": "account.getSavedRingtones",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.SavedRingtones"
    },
    {
      "id": 1038768899,
      "method": "account.saveRingtone",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "account.SavedRingtone"
    },
    {
      "id": 2199552930,
      "method": "account.uploadRingtone",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "file_name",
          "type": "string"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    {
      "id": 4224966251,
      "method": "account.updateEmojiStatus",
      "params": [
        {
          "name": "emoji_status",
          "type": "EmojiStatus"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3598005126,
      "method": "account.getDefaultEmojiStatuses",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.EmojiStatuses"
    },
    {
      "id": 257392901,
      "method": "account.getRecentEmojiStatuses",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.EmojiStatuses"
    },
    {
      "id": 404757166,
      "method": "account.clearRecentEmojiStatuses",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 4015001259,
      "method": "account.reorderUsernames",
      "params": [
        {
          "name": "order",
          "type": "Vector<string>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1490465654,
      "method": "account.toggleUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "active",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3799319336,
      "method": "account.getDefaultProfilePhotoEmojis",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "EmojiList"
    },
    {
      "id": 2438488238,
      "method": "account.getDefaultGroupPhotoEmojis",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "EmojiList"
    },
    {
      "id": 2915810522,
      "method": "account.getAutoSaveSettings",
      "params": [],
      "type": "account.AutoSaveSettings"
    },
    {
      "id": 3600515937,
      "method": "account.saveAutoSaveSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "users",
          "type": "flags.0?true"
        },
        {
          "name": "chats",
          "type": "flags.1?true"
        },
        {
          "name": "broadcasts",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "flags.3?InputPeer"
        },
        {
          "name": "settings",
          "type": "AutoSaveSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1404829728,
      "method": "account.deleteAutoSaveExceptions",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3398101178,
      "method": "account.invalidateSignInCodes",
      "params": [
        {
          "name": "codes",
          "type": "Vector<string>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2096079197,
      "method": "account.updateColor",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "for_profile",
          "type": "flags.1?true"
        },
        {
          "name": "color",
          "type": "flags.2?int"
        },
        {
          "name": "background_emoji_id",
          "type": "flags.0?long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2785720782,
      "method": "account.getDefaultBackgroundEmojis",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "EmojiList"
    },
    {
      "id": 1999087573,
      "method": "account.getChannelDefaultEmojiStatuses",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.EmojiStatuses"
    },
    {
      "id": 900325589,
      "method": "account.getChannelRestrictedStatusEmojis",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "EmojiList"
    },
    {
      "id": 1258348646,
      "method": "account.updateBusinessWorkHours",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "business_work_hours",
          "type": "flags.0?BusinessWorkHours"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2657817370,
      "method": "account.updateBusinessLocation",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "flags.1?InputGeoPoint"
        },
        {
          "name": "address",
          "type": "flags.0?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1724755908,
      "method": "account.updateBusinessGreetingMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "flags.0?InputBusinessGreetingMessage"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2724888485,
      "method": "account.updateBusinessAwayMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "flags.0?InputBusinessAwayMessage"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1138250269,
      "method": "account.updateConnectedBot",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_reply",
          "type": "flags.0?true"
        },
        {
          "name": "deleted",
          "type": "flags.1?true"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "recipients",
          "type": "InputBusinessBotRecipients"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1319421967,
      "method": "account.getConnectedBots",
      "params": [],
      "type": "account.ConnectedBots"
    },
    {
      "id": 1990746736,
      "method": "account.getBotBusinessConnection",
      "params": [
        {
          "name": "connection_id",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2786381876,
      "method": "account.updateBusinessIntro",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "intro",
          "type": "flags.0?InputBusinessIntro"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1684934807,
      "method": "account.toggleConnectedBotPaused",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "paused",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1581481689,
      "method": "account.disablePeerConnectedBot",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3429764113,
      "method": "account.updateBirthday",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "birthday",
          "type": "flags.0?Birthday"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2287068814,
      "method": "account.createBusinessChatLink",
      "params": [
        {
          "name": "link",
          "type": "InputBusinessChatLink"
        }
      ],
      "type": "BusinessChatLink"
    },
    {
      "id": 2352222383,
      "method": "account.editBusinessChatLink",
      "params": [
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "link",
          "type": "InputBusinessChatLink"
        }
      ],
      "type": "BusinessChatLink"
    },
    {
      "id": 1611085428,
      "method": "account.deleteBusinessChatLink",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1869667809,
      "method": "account.getBusinessChatLinks",
      "params": [],
      "type": "account.BusinessChatLinks"
    },
    {
      "id": 1418913262,
      "method": "account.resolveBusinessChatLink",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "account.ResolvedBusinessChatLinks"
    },
    {
      "id": 3645048288,
      "method": "account.updatePersonalChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3118048141,
      "method": "account.toggleSponsoredMessages",
      "params": [
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 115172684,
      "method": "account.getReactionsNotifySettings",
      "params": [],
      "type": "ReactionsNotifySettings"
    },
    {
      "id": 829220168,
      "method": "account.setReactionsNotifySettings",
      "params": [
        {
          "name": "settings",
          "type": "ReactionsNotifySettings"
        }
      ],
      "type": "ReactionsNotifySettings"
    },
    {
      "id": 779830595,
      "method": "account.getCollectibleEmojiStatuses",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "account.EmojiStatuses"
    },
    {
      "id": 227648840,
      "method": "users.getUsers",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Vector<User>"
    },
    {
      "id": 3054459160,
      "method": "users.getFullUser",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "users.UserFull"
    },
    {
      "id": 2429064373,
      "method": "users.setSecureValueErrors",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        },
        {
          "name": "errors",
          "type": "Vector<SecureValueError>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2787289616,
      "method": "users.getIsPremiumRequiredToContact",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Vector<Bool>"
    },
    {
      "id": 2061264541,
      "method": "contacts.getContactIDs",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 3299038190,
      "method": "contacts.getStatuses",
      "params": [],
      "type": "Vector<ContactStatus>"
    },
    {
      "id": 1574346258,
      "method": "contacts.getContacts",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "contacts.Contacts"
    },
    {
      "id": 746589157,
      "method": "contacts.importContacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector<InputContact>"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    {
      "id": 157945344,
      "method": "contacts.deleteContacts",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 269745566,
      "method": "contacts.deleteByPhones",
      "params": [
        {
          "name": "phones",
          "type": "Vector<string>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 774801204,
      "method": "contacts.block",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "my_stories_from",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3041973032,
      "method": "contacts.unblock",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "my_stories_from",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2592509824,
      "method": "contacts.getBlocked",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "my_stories_from",
          "type": "flags.0?true"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": 301470424,
      "method": "contacts.search",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Found"
    },
    {
      "id": 1918565308,
      "method": "contacts.resolveUsername",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "referer",
          "type": "flags.0?string"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    {
      "id": 2536798390,
      "method": "contacts.getTopPeers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "correspondents",
          "type": "flags.0?true"
        },
        {
          "name": "bots_pm",
          "type": "flags.1?true"
        },
        {
          "name": "bots_inline",
          "type": "flags.2?true"
        },
        {
          "name": "phone_calls",
          "type": "flags.3?true"
        },
        {
          "name": "forward_users",
          "type": "flags.4?true"
        },
        {
          "name": "forward_chats",
          "type": "flags.5?true"
        },
        {
          "name": "groups",
          "type": "flags.10?true"
        },
        {
          "name": "channels",
          "type": "flags.15?true"
        },
        {
          "name": "bots_app",
          "type": "flags.16?true"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "contacts.TopPeers"
    },
    {
      "id": 451113900,
      "method": "contacts.resetTopPeerRating",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2274703345,
      "method": "contacts.resetSaved",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2196890527,
      "method": "contacts.getSaved",
      "params": [],
      "type": "Vector<SavedContact>"
    },
    {
      "id": 2232729050,
      "method": "contacts.toggleTopPeers",
      "params": [
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3908330448,
      "method": "contacts.addContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "add_phone_privacy_exception",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputUser"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4164002319,
      "method": "contacts.acceptContact",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3544759364,
      "method": "contacts.getLocated",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "background",
          "type": "flags.1?true"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "self_expires",
          "type": "flags.0?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 698914348,
      "method": "contacts.blockFromReplies",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "delete_message",
          "type": "flags.0?true"
        },
        {
          "name": "delete_history",
          "type": "flags.1?true"
        },
        {
          "name": "report_spam",
          "type": "flags.2?true"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2331591492,
      "method": "contacts.resolvePhone",
      "params": [
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    {
      "id": 4167385127,
      "method": "contacts.exportContactToken",
      "params": [],
      "type": "ExportedContactToken"
    },
    {
      "id": 318789512,
      "method": "contacts.importContactToken",
      "params": [
        {
          "name": "token",
          "type": "string"
        }
      ],
      "type": "User"
    },
    {
      "id": 3127313904,
      "method": "contacts.editCloseFriends",
      "params": [
        {
          "name": "id",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2496027766,
      "method": "contacts.setBlocked",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "my_stories_from",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3673008228,
      "method": "contacts.getBirthdays",
      "params": [],
      "type": "contacts.ContactBirthdays"
    },
    {
      "id": 1673946374,
      "method": "messages.getMessages",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputMessage>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 2700397391,
      "method": "messages.getDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_pinned",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 1143203525,
      "method": "messages.getHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 703497338,
      "method": "messages.search",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "from_id",
          "type": "flags.0?InputPeer"
        },
        {
          "name": "saved_peer_id",
          "type": "flags.2?InputPeer"
        },
        {
          "name": "saved_reaction",
          "type": "flags.3?Vector<Reaction>"
        },
        {
          "name": "top_msg_id",
          "type": "flags.1?int"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 238054714,
      "method": "messages.readHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 2962199082,
      "method": "messages.deleteHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "just_clear",
          "type": "flags.0?true"
        },
        {
          "name": "revoke",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_date",
          "type": "flags.2?int"
        },
        {
          "name": "max_date",
          "type": "flags.3?int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 3851326930,
      "method": "messages.deleteMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 94983360,
      "method": "messages.receivedMessages",
      "params": [
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Vector<ReceivedNotifyMessage>"
    },
    {
      "id": 1486110434,
      "method": "messages.setTyping",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2554304325,
      "method": "messages.sendMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "noforwards",
          "type": "flags.14?true"
        },
        {
          "name": "update_stickersets_order",
          "type": "flags.15?true"
        },
        {
          "name": "invert_media",
          "type": "flags.16?true"
        },
        {
          "name": "allow_paid_floodskip",
          "type": "flags.19?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to",
          "type": "flags.0?InputReplyTo"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        },
        {
          "name": "send_as",
          "type": "flags.13?InputPeer"
        },
        {
          "name": "quick_reply_shortcut",
          "type": "flags.17?InputQuickReplyShortcut"
        },
        {
          "name": "effect",
          "type": "flags.18?long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2018673486,
      "method": "messages.sendMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "noforwards",
          "type": "flags.14?true"
        },
        {
          "name": "update_stickersets_order",
          "type": "flags.15?true"
        },
        {
          "name": "invert_media",
          "type": "flags.16?true"
        },
        {
          "name": "allow_paid_floodskip",
          "type": "flags.19?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to",
          "type": "flags.0?InputReplyTo"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        },
        {
          "name": "send_as",
          "type": "flags.13?InputPeer"
        },
        {
          "name": "quick_reply_shortcut",
          "type": "flags.17?InputQuickReplyShortcut"
        },
        {
          "name": "effect",
          "type": "flags.18?long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1836374536,
      "method": "messages.forwardMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "with_my_score",
          "type": "flags.8?true"
        },
        {
          "name": "drop_author",
          "type": "flags.11?true"
        },
        {
          "name": "drop_media_captions",
          "type": "flags.12?true"
        },
        {
          "name": "noforwards",
          "type": "flags.14?true"
        },
        {
          "name": "allow_paid_floodskip",
          "type": "flags.19?true"
        },
        {
          "name": "from_peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "random_id",
          "type": "Vector<long>"
        },
        {
          "name": "to_peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.9?int"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        },
        {
          "name": "send_as",
          "type": "flags.13?InputPeer"
        },
        {
          "name": "quick_reply_shortcut",
          "type": "flags.17?InputQuickReplyShortcut"
        },
        {
          "name": "video_timestamp",
          "type": "flags.20?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3474297563,
      "method": "messages.reportSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4024018594,
      "method": "messages.getPeerSettings",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.PeerSettings"
    },
    {
      "id": 4235767707,
      "method": "messages.report",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "ReportResult"
    },
    {
      "id": 1240027791,
      "method": "messages.getChats",
      "params": [
        {
          "name": "id",
          "type": "Vector<long>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 2930772788,
      "method": "messages.getFullChat",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": 1937260541,
      "method": "messages.editChatTitle",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 903730804,
      "method": "messages.editChatPhoto",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3418804487,
      "method": "messages.addChatUser",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "fwd_limit",
          "type": "int"
        }
      ],
      "type": "messages.InvitedUsers"
    },
    {
      "id": 2719505579,
      "method": "messages.deleteChatUser",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke_history",
          "type": "flags.0?true"
        },
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2463030740,
      "method": "messages.createChat",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "users",
          "type": "Vector<InputUser>"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "ttl_period",
          "type": "flags.0?int"
        }
      ],
      "type": "messages.InvitedUsers"
    },
    {
      "id": 651135312,
      "method": "messages.getDhConfig",
      "params": [
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random_length",
          "type": "int"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": 4132286275,
      "method": "messages.requestEncryption",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 1035731989,
      "method": "messages.acceptEncryption",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 4086541984,
      "method": "messages.discardEncryption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "delete_history",
          "type": "flags.0?true"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2031374829,
      "method": "messages.setEncryptedTyping",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "typing",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2135648522,
      "method": "messages.readEncryptedHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "max_date",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1157265941,
      "method": "messages.sendEncrypted",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 1431914525,
      "method": "messages.sendEncryptedFile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 852769188,
      "method": "messages.sendEncryptedService",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 1436924774,
      "method": "messages.receivedQueue",
      "params": [
        {
          "name": "max_qts",
          "type": "int"
        }
      ],
      "type": "Vector<long>"
    },
    {
      "id": 1259113487,
      "method": "messages.reportEncryptedSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 916930423,
      "method": "messages.readMessageContents",
      "params": [
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 3584414625,
      "method": "messages.getStickers",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Stickers"
    },
    {
      "id": 3097534888,
      "method": "messages.getAllStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": 1460498287,
      "method": "messages.getWebPagePreview",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "messages.WebPagePreview"
    },
    {
      "id": 2757090960,
      "method": "messages.exportChatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "legacy_revoke_permanent",
          "type": "flags.2?true"
        },
        {
          "name": "request_needed",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "expire_date",
          "type": "flags.0?int"
        },
        {
          "name": "usage_limit",
          "type": "flags.1?int"
        },
        {
          "name": "title",
          "type": "flags.4?string"
        },
        {
          "name": "subscription_pricing",
          "type": "flags.5?StarsSubscriptionPricing"
        }
      ],
      "type": "ExportedChatInvite"
    },
    {
      "id": 1051570619,
      "method": "messages.checkChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 1817183516,
      "method": "messages.importChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3365989492,
      "method": "messages.getStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 3348096096,
      "method": "messages.installStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "archived",
          "type": "Bool"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": 4184757726,
      "method": "messages.uninstallStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3873403768,
      "method": "messages.startBot",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1468322785,
      "method": "messages.getMessagesViews",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "increment",
          "type": "Bool"
        }
      ],
      "type": "messages.MessageViews"
    },
    {
      "id": 2824589762,
      "method": "messages.editChatAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2726777625,
      "method": "messages.migrateChat",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1271290010,
      "method": "messages.searchGlobal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcasts_only",
          "type": "flags.1?true"
        },
        {
          "name": "groups_only",
          "type": "flags.2?true"
        },
        {
          "name": "users_only",
          "type": "flags.3?true"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "offset_rate",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 2016638777,
      "method": "messages.reorderStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "emojis",
          "type": "flags.1?true"
        },
        {
          "name": "order",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2985428511,
      "method": "messages.getDocumentByHash",
      "params": [
        {
          "name": "sha256",
          "type": "bytes"
        },
        {
          "name": "size",
          "type": "long"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    {
      "id": 1559270965,
      "method": "messages.getSavedGifs",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.SavedGifs"
    },
    {
      "id": 846868683,
      "method": "messages.saveGif",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1364105629,
      "method": "messages.getInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "geo_point",
          "type": "flags.0?InputGeoPoint"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "messages.BotResults"
    },
    {
      "id": 3138561049,
      "method": "messages.setInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "private",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "results",
          "type": "Vector<InputBotInlineResult>"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "next_offset",
          "type": "flags.2?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.3?InlineBotSwitchPM"
        },
        {
          "name": "switch_webview",
          "type": "flags.4?InlineBotWebView"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1052698730,
      "method": "messages.sendInlineBotResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "hide_via",
          "type": "flags.11?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to",
          "type": "flags.0?InputReplyTo"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        },
        {
          "name": "send_as",
          "type": "flags.13?InputPeer"
        },
        {
          "name": "quick_reply_shortcut",
          "type": "flags.17?InputQuickReplyShortcut"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4255550774,
      "method": "messages.getMessageEditData",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "messages.MessageEditData"
    },
    {
      "id": 3755032581,
      "method": "messages.editMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "invert_media",
          "type": "flags.16?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.15?int"
        },
        {
          "name": "quick_reply_shortcut_id",
          "type": "flags.17?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2203418042,
      "method": "messages.editInlineBotMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "invert_media",
          "type": "flags.16?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2470627847,
      "method": "messages.getBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "game",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "password",
          "type": "flags.2?InputCheckPasswordSRP"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    {
      "id": 3582923530,
      "method": "messages.setBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3832593661,
      "method": "messages.getPeerDialogs",
      "params": [
        {
          "name": "peers",
          "type": "Vector<InputDialogPeer>"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": 3547514318,
      "method": "messages.saveDraft",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "invert_media",
          "type": "flags.6?true"
        },
        {
          "name": "reply_to",
          "type": "flags.4?InputReplyTo"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "media",
          "type": "flags.5?InputMedia"
        },
        {
          "name": "effect",
          "type": "flags.7?long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1782549861,
      "method": "messages.getAllDrafts",
      "params": [],
      "type": "Updates"
    },
    {
      "id": 1685588756,
      "method": "messages.getFeaturedStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 1527873830,
      "method": "messages.readFeaturedStickers",
      "params": [
        {
          "name": "id",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2645114939,
      "method": "messages.getRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.RecentStickers"
    },
    {
      "id": 958863608,
      "method": "messages.saveRecentSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2308530221,
      "method": "messages.clearRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1475442322,
      "method": "messages.getArchivedStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "emojis",
          "type": "flags.1?true"
        },
        {
          "name": "offset_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    {
      "id": 1678738104,
      "method": "messages.getMaskStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": 3428542412,
      "method": "messages.getAttachedStickers",
      "params": [
        {
          "name": "media",
          "type": "InputStickeredMedia"
        }
      ],
      "type": "Vector<StickerSetCovered>"
    },
    {
      "id": 2398678208,
      "method": "messages.setGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 363700068,
      "method": "messages.setInlineGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3894568093,
      "method": "messages.getGameHighScores",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": 258170395,
      "method": "messages.getInlineGameHighScores",
      "params": [
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": 3826032900,
      "method": "messages.getCommonChats",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 2375455395,
      "method": "messages.getWebPage",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.WebPage"
    },
    {
      "id": 2805064279,
      "method": "messages.toggleDialogPin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 991616823,
      "method": "messages.reorderPinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "int"
        },
        {
          "name": "order",
          "type": "Vector<InputDialogPeer>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3602468338,
      "method": "messages.getPinnedDialogs",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": 3858133754,
      "method": "messages.setBotShippingResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector<ShippingOption>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 163765653,
      "method": "messages.setBotPrecheckoutResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 345405816,
      "method": "messages.uploadMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "business_connection_id",
          "type": "flags.0?string"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "media",
          "type": "InputMedia"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 2705348631,
      "method": "messages.sendScreenshotNotification",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to",
          "type": "InputReplyTo"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 82946729,
      "method": "messages.getFavedStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.FavedStickers"
    },
    {
      "id": 3120547163,
      "method": "messages.faveSticker",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unfave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4043827088,
      "method": "messages.getUnreadMentions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 921026381,
      "method": "messages.readMentions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 1881817312,
      "method": "messages.getRecentLocations",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 934757205,
      "method": "messages.sendMultiMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "noforwards",
          "type": "flags.14?true"
        },
        {
          "name": "update_stickersets_order",
          "type": "flags.15?true"
        },
        {
          "name": "invert_media",
          "type": "flags.16?true"
        },
        {
          "name": "allow_paid_floodskip",
          "type": "flags.19?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to",
          "type": "flags.0?InputReplyTo"
        },
        {
          "name": "multi_media",
          "type": "Vector<InputSingleMedia>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        },
        {
          "name": "send_as",
          "type": "flags.13?InputPeer"
        },
        {
          "name": "quick_reply_shortcut",
          "type": "flags.17?InputQuickReplyShortcut"
        },
        {
          "name": "effect",
          "type": "flags.18?long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1347929239,
      "method": "messages.uploadEncryptedFile",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "EncryptedFile"
    },
    {
      "id": 896555914,
      "method": "messages.searchStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_featured",
          "type": "flags.0?true"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": 486505992,
      "method": "messages.getSplitRanges",
      "params": [],
      "type": "Vector<MessageRange>"
    },
    {
      "id": 3263617423,
      "method": "messages.markDialogUnread",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 585256482,
      "method": "messages.getDialogUnreadMarks",
      "params": [],
      "type": "Vector<DialogPeer>"
    },
    {
      "id": 2119757468,
      "method": "messages.clearAllDrafts",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3534419948,
      "method": "messages.updatePinnedMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "unpin",
          "type": "flags.1?true"
        },
        {
          "name": "pm_oneside",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 283795844,
      "method": "messages.sendVote",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1941660731,
      "method": "messages.getPollResults",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1848369232,
      "method": "messages.getOnlines",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "ChatOnlines"
    },
    {
      "id": 3740665751,
      "method": "messages.editChatAbout",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "about",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2777049921,
      "method": "messages.editChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 899735650,
      "method": "messages.getEmojiKeywords",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": 352892591,
      "method": "messages.getEmojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": 1318675378,
      "method": "messages.getEmojiKeywordsLanguages",
      "params": [
        {
          "name": "lang_codes",
          "type": "Vector<string>"
        }
      ],
      "type": "Vector<EmojiLanguage>"
    },
    {
      "id": 3585149990,
      "method": "messages.getEmojiURL",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    {
      "id": 465367808,
      "method": "messages.getSearchCounters",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "saved_peer_id",
          "type": "flags.2?InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "filters",
          "type": "Vector<MessagesFilter>"
        }
      ],
      "type": "Vector<messages.SearchCounter>"
    },
    {
      "id": 428848198,
      "method": "messages.requestUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "flags.1?InputPeer"
        },
        {
          "name": "msg_id",
          "type": "flags.1?int"
        },
        {
          "name": "button_id",
          "type": "flags.1?int"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 2972479781,
      "method": "messages.acceptUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "write_allowed",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "flags.1?InputPeer"
        },
        {
          "name": "msg_id",
          "type": "flags.1?int"
        },
        {
          "name": "button_id",
          "type": "flags.1?int"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 1336717624,
      "method": "messages.hidePeerSettingsBar",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4111889931,
      "method": "messages.getScheduledHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 3183150180,
      "method": "messages.getScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 3174597898,
      "method": "messages.sendScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1504586518,
      "method": "messages.deleteScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3094231054,
      "method": "messages.getPollVotes",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "option",
          "type": "flags.0?bytes"
        },
        {
          "name": "offset",
          "type": "flags.1?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.VotesList"
    },
    {
      "id": 3037016042,
      "method": "messages.toggleStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "uninstall",
          "type": "flags.0?true"
        },
        {
          "name": "archive",
          "type": "flags.1?true"
        },
        {
          "name": "unarchive",
          "type": "flags.2?true"
        },
        {
          "name": "stickersets",
          "type": "Vector<InputStickerSet>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4023684233,
      "method": "messages.getDialogFilters",
      "params": [],
      "type": "messages.DialogFilters"
    },
    {
      "id": 2728186924,
      "method": "messages.getSuggestedDialogFilters",
      "params": [],
      "type": "Vector<DialogFilterSuggested>"
    },
    {
      "id": 450142282,
      "method": "messages.updateDialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "filter",
          "type": "flags.0?DialogFilter"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3311649252,
      "method": "messages.updateDialogFiltersOrder",
      "params": [
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2127598753,
      "method": "messages.getOldFeaturedStickers",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 584962828,
      "method": "messages.getReplies",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1147761405,
      "method": "messages.getDiscussionMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "messages.DiscussionMessage"
    },
    {
      "id": 4147227124,
      "method": "messages.readDiscussion",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "read_max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3995253160,
      "method": "messages.unpinAllMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 1540419152,
      "method": "messages.deleteChat",
      "params": [
        {
          "name": "chat_id",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4190888969,
      "method": "messages.deletePhoneCallHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke",
          "type": "flags.0?true"
        }
      ],
      "type": "messages.AffectedFoundMessages"
    },
    {
      "id": 1140726259,
      "method": "messages.checkHistoryImport",
      "params": [
        {
          "name": "import_head",
          "type": "string"
        }
      ],
      "type": "messages.HistoryImportParsed"
    },
    {
      "id": 873008187,
      "method": "messages.initHistoryImport",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "media_count",
          "type": "int"
        }
      ],
      "type": "messages.HistoryImport"
    },
    {
      "id": 713433234,
      "method": "messages.uploadImportedMedia",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "import_id",
          "type": "long"
        },
        {
          "name": "file_name",
          "type": "string"
        },
        {
          "name": "media",
          "type": "InputMedia"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3023958852,
      "method": "messages.startHistoryImport",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "import_id",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2729812982,
      "method": "messages.getExportedChatInvites",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "admin_id",
          "type": "InputUser"
        },
        {
          "name": "offset_date",
          "type": "flags.2?int"
        },
        {
          "name": "offset_link",
          "type": "flags.2?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ExportedChatInvites"
    },
    {
      "id": 1937010524,
      "method": "messages.getExportedChatInvite",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 3184144245,
      "method": "messages.editExportedChatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "expire_date",
          "type": "flags.0?int"
        },
        {
          "name": "usage_limit",
          "type": "flags.1?int"
        },
        {
          "name": "request_needed",
          "type": "flags.3?Bool"
        },
        {
          "name": "title",
          "type": "flags.4?string"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 1452833749,
      "method": "messages.deleteRevokedExportedChatInvites",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "admin_id",
          "type": "InputUser"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3563365419,
      "method": "messages.deleteExportedChatInvite",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 958457583,
      "method": "messages.getAdminsWithInvites",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.ChatAdminsWithInvites"
    },
    {
      "id": 3741637966,
      "method": "messages.getChatInviteImporters",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "requested",
          "type": "flags.0?true"
        },
        {
          "name": "subscription_expired",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "flags.1?string"
        },
        {
          "name": "q",
          "type": "flags.2?string"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_user",
          "type": "InputUser"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ChatInviteImporters"
    },
    {
      "id": 3087949796,
      "method": "messages.setHistoryTTL",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1573261059,
      "method": "messages.checkHistoryImportPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.CheckedHistoryImportPeer"
    },
    {
      "id": 3862683967,
      "method": "messages.setChatTheme",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 834782287,
      "method": "messages.getMessageReadParticipants",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Vector<ReadParticipantDate>"
    },
    {
      "id": 1789130429,
      "method": "messages.getSearchResultsCalendar",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "saved_peer_id",
          "type": "flags.2?InputPeer"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        }
      ],
      "type": "messages.SearchResultsCalendar"
    },
    {
      "id": 2625580816,
      "method": "messages.getSearchResultsPositions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "saved_peer_id",
          "type": "flags.2?InputPeer"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.SearchResultsPositions"
    },
    {
      "id": 2145904661,
      "method": "messages.hideChatJoinRequest",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "approved",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3766875370,
      "method": "messages.hideAllChatJoinRequests",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "approved",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "flags.1?string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2971578274,
      "method": "messages.toggleNoForwards",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3439189910,
      "method": "messages.saveDefaultSendAs",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "send_as",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3540875476,
      "method": "messages.sendReaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "big",
          "type": "flags.1?true"
        },
        {
          "name": "add_to_recent",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "flags.0?Vector<Reaction>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2344259814,
      "method": "messages.getMessagesReactions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1176190792,
      "method": "messages.getMessageReactionsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "flags.0?Reaction"
        },
        {
          "name": "offset",
          "type": "flags.1?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.MessageReactionsList"
    },
    {
      "id": 2253071745,
      "method": "messages.setChatAvailableReactions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "available_reactions",
          "type": "ChatReactions"
        },
        {
          "name": "reactions_limit",
          "type": "flags.0?int"
        },
        {
          "name": "paid_enabled",
          "type": "flags.1?Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 417243308,
      "method": "messages.getAvailableReactions",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AvailableReactions"
    },
    {
      "id": 1330094102,
      "method": "messages.setDefaultReaction",
      "params": [
        {
          "name": "reaction",
          "type": "Reaction"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1662529584,
      "method": "messages.translateText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "flags.0?InputPeer"
        },
        {
          "name": "id",
          "type": "flags.0?Vector<int>"
        },
        {
          "name": "text",
          "type": "flags.1?Vector<TextWithEntities>"
        },
        {
          "name": "to_lang",
          "type": "string"
        }
      ],
      "type": "messages.TranslatedText"
    },
    {
      "id": 841173339,
      "method": "messages.getUnreadReactions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1420459918,
      "method": "messages.readReactions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 276705696,
      "method": "messages.searchSentMedia",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 385663691,
      "method": "messages.getAttachMenuBots",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "AttachMenuBots"
    },
    {
      "id": 1998676370,
      "method": "messages.getAttachMenuBot",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "AttachMenuBotsBot"
    },
    {
      "id": 1777704297,
      "method": "messages.toggleBotInAttachMenu",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "write_allowed",
          "type": "flags.0?true"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 647873217,
      "method": "messages.requestWebView",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "from_bot_menu",
          "type": "flags.4?true"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "compact",
          "type": "flags.7?true"
        },
        {
          "name": "fullscreen",
          "type": "flags.8?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "url",
          "type": "flags.1?string"
        },
        {
          "name": "start_param",
          "type": "flags.3?string"
        },
        {
          "name": "theme_params",
          "type": "flags.2?DataJSON"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "reply_to",
          "type": "flags.0?InputReplyTo"
        },
        {
          "name": "send_as",
          "type": "flags.13?InputPeer"
        }
      ],
      "type": "WebViewResult"
    },
    {
      "id": 2966952579,
      "method": "messages.prolongWebView",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "reply_to",
          "type": "flags.0?InputReplyTo"
        },
        {
          "name": "send_as",
          "type": "flags.13?InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1094336115,
      "method": "messages.requestSimpleWebView",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "from_switch_webview",
          "type": "flags.1?true"
        },
        {
          "name": "from_side_menu",
          "type": "flags.2?true"
        },
        {
          "name": "compact",
          "type": "flags.7?true"
        },
        {
          "name": "fullscreen",
          "type": "flags.8?true"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "start_param",
          "type": "flags.4?string"
        },
        {
          "name": "theme_params",
          "type": "flags.0?DataJSON"
        },
        {
          "name": "platform",
          "type": "string"
        }
      ],
      "type": "WebViewResult"
    },
    {
      "id": 172168437,
      "method": "messages.sendWebViewResultMessage",
      "params": [
        {
          "name": "bot_query_id",
          "type": "string"
        },
        {
          "name": "result",
          "type": "InputBotInlineResult"
        }
      ],
      "type": "WebViewMessageSent"
    },
    {
      "id": 3691135688,
      "method": "messages.sendWebViewData",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "button_text",
          "type": "string"
        },
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 647928393,
      "method": "messages.transcribeAudio",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "messages.TranscribedAudio"
    },
    {
      "id": 2132608815,
      "method": "messages.rateTranscribedAudio",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "transcription_id",
          "type": "long"
        },
        {
          "name": "good",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3651866452,
      "method": "messages.getCustomEmojiDocuments",
      "params": [
        {
          "name": "document_id",
          "type": "Vector<long>"
        }
      ],
      "type": "Vector<Document>"
    },
    {
      "id": 4227637647,
      "method": "messages.getEmojiStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": 248473398,
      "method": "messages.getFeaturedEmojiStickers",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 1063567478,
      "method": "messages.reportReaction",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "reaction_peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3145803194,
      "method": "messages.getTopReactions",
      "params": [
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Reactions"
    },
    {
      "id": 960896434,
      "method": "messages.getRecentReactions",
      "params": [
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Reactions"
    },
    {
      "id": 2650730420,
      "method": "messages.clearRecentReactions",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2230847508,
      "method": "messages.getExtendedMedia",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2662667333,
      "method": "messages.setDefaultHistoryTTL",
      "params": [
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1703637384,
      "method": "messages.getDefaultHistoryTTL",
      "params": [],
      "type": "DefaultHistoryTTL"
    },
    {
      "id": 2444415072,
      "method": "messages.sendBotRequestedPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "button_id",
          "type": "int"
        },
        {
          "name": "requested_peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1955122779,
      "method": "messages.getEmojiGroups",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.EmojiGroups"
    },
    {
      "id": 785209037,
      "method": "messages.getEmojiStatusGroups",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.EmojiGroups"
    },
    {
      "id": 564480243,
      "method": "messages.getEmojiProfilePhotoGroups",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.EmojiGroups"
    },
    {
      "id": 739360983,
      "method": "messages.searchCustomEmoji",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "EmojiList"
    },
    {
      "id": 3833378169,
      "method": "messages.togglePeerTranslations",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "disabled",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 889046467,
      "method": "messages.getBotApp",
      "params": [
        {
          "name": "app",
          "type": "InputBotApp"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.BotApp"
    },
    {
      "id": 1398901710,
      "method": "messages.requestAppWebView",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "write_allowed",
          "type": "flags.0?true"
        },
        {
          "name": "compact",
          "type": "flags.7?true"
        },
        {
          "name": "fullscreen",
          "type": "flags.8?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "app",
          "type": "InputBotApp"
        },
        {
          "name": "start_param",
          "type": "flags.1?string"
        },
        {
          "name": "theme_params",
          "type": "flags.2?DataJSON"
        },
        {
          "name": "platform",
          "type": "string"
        }
      ],
      "type": "WebViewResult"
    },
    {
      "id": 2415577825,
      "method": "messages.setChatWallPaper",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "for_both",
          "type": "flags.3?true"
        },
        {
          "name": "revert",
          "type": "flags.4?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "wallpaper",
          "type": "flags.0?InputWallPaper"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        },
        {
          "name": "id",
          "type": "flags.1?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2461288780,
      "method": "messages.searchEmojiStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_featured",
          "type": "flags.0?true"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": 1401016858,
      "method": "messages.getSavedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_pinned",
          "type": "flags.0?true"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.SavedDialogs"
    },
    {
      "id": 1033519437,
      "method": "messages.getSavedHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1855459371,
      "method": "messages.deleteSavedHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_date",
          "type": "flags.2?int"
        },
        {
          "name": "max_date",
          "type": "flags.3?int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 3594360032,
      "method": "messages.getPinnedSavedDialogs",
      "params": [],
      "type": "messages.SavedDialogs"
    },
    {
      "id": 2894183390,
      "method": "messages.toggleSavedDialogPin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2339464583,
      "method": "messages.reorderPinnedSavedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector<InputDialogPeer>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 909631579,
      "method": "messages.getSavedReactionTags",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "flags.0?InputPeer"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.SavedReactionTags"
    },
    {
      "id": 1613331948,
      "method": "messages.updateSavedReactionTag",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3187225640,
      "method": "messages.getDefaultTagReactions",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Reactions"
    },
    {
      "id": 2353790557,
      "method": "messages.getOutboxReadDate",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "OutboxReadDate"
    },
    {
      "id": 3565417128,
      "method": "messages.getQuickReplies",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.QuickReplies"
    },
    {
      "id": 1613961479,
      "method": "messages.reorderQuickReplies",
      "params": [
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4057005011,
      "method": "messages.checkQuickReplyShortcut",
      "params": [
        {
          "name": "shortcut",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1543519471,
      "method": "messages.editQuickReplyShortcut",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "shortcut",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1019234112,
      "method": "messages.deleteQuickReplyShortcut",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2493814211,
      "method": "messages.getQuickReplyMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "flags.0?Vector<int>"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1819610593,
      "method": "messages.sendQuickReplyMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "random_id",
          "type": "Vector<long>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3775260944,
      "method": "messages.deleteQuickReplyMessages",
      "params": [
        {
          "name": "shortcut_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4247640649,
      "method": "messages.toggleDialogFilterTags",
      "params": [
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3501580796,
      "method": "messages.getMyStickers",
      "params": [
        {
          "name": "offset_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.MyStickers"
    },
    {
      "id": 500711669,
      "method": "messages.getEmojiStickerGroups",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.EmojiGroups"
    },
    {
      "id": 3735161401,
      "method": "messages.getAvailableEffects",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AvailableEffects"
    },
    {
      "id": 92925557,
      "method": "messages.editFactCheck",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "text",
          "type": "TextWithEntities"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3520762892,
      "method": "messages.deleteFactCheck",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3117270510,
      "method": "messages.getFactCheck",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "Vector<int>"
        }
      ],
      "type": "Vector<FactCheck>"
    },
    {
      "id": 3386908283,
      "method": "messages.requestMainWebView",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "compact",
          "type": "flags.7?true"
        },
        {
          "name": "fullscreen",
          "type": "flags.8?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "start_param",
          "type": "flags.1?string"
        },
        {
          "name": "theme_params",
          "type": "flags.0?DataJSON"
        },
        {
          "name": "platform",
          "type": "string"
        }
      ],
      "type": "WebViewResult"
    },
    {
      "id": 1488702288,
      "method": "messages.sendPaidReaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "private",
          "type": "flags.0?PaidReactionPrivacy"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1129874869,
      "method": "messages.togglePaidReactionPrivacy",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "private",
          "type": "PaidReactionPrivacy"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1193563562,
      "method": "messages.getPaidReactionPrivacy",
      "params": [],
      "type": "Updates"
    },
    {
      "id": 1731909873,
      "method": "messages.viewSponsoredMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 252261477,
      "method": "messages.clickSponsoredMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "media",
          "type": "flags.0?true"
        },
        {
          "name": "fullscreen",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 452189112,
      "method": "messages.reportSponsoredMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "bytes"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "channels.SponsoredMessageReportResult"
    },
    {
      "id": 2614293561,
      "method": "messages.getSponsoredMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.SponsoredMessages"
    },
    {
      "id": 4062150447,
      "method": "messages.savePreparedInlineMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "result",
          "type": "InputBotInlineResult"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "peer_types",
          "type": "flags.0?Vector<InlineQueryPeerType>"
        }
      ],
      "type": "messages.BotPreparedInlineMessage"
    },
    {
      "id": 2239675832,
      "method": "messages.getPreparedInlineMessage",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "id",
          "type": "string"
        }
      ],
      "type": "messages.PreparedInlineMessage"
    },
    {
      "id": 699516522,
      "method": "messages.searchStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "emojis",
          "type": "flags.0?true"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "Vector<string>"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "messages.FoundStickers"
    },
    {
      "id": 1517122453,
      "method": "messages.reportMessagesDelivery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "push",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3990128682,
      "method": "updates.getState",
      "params": [],
      "type": "updates.State"
    },
    {
      "id": 432207715,
      "method": "updates.getDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_limit",
          "type": "flags.1?int"
        },
        {
          "name": "pts_total_limit",
          "type": "flags.0?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        },
        {
          "name": "qts_limit",
          "type": "flags.2?int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 51854712,
      "method": "updates.getChannelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelMessagesFilter"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 166207545,
      "method": "photos.updateProfilePhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "fallback",
          "type": "flags.0?true"
        },
        {
          "name": "bot",
          "type": "flags.1?InputUser"
        },
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": 59286453,
      "method": "photos.uploadProfilePhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "fallback",
          "type": "flags.3?true"
        },
        {
          "name": "bot",
          "type": "flags.5?InputUser"
        },
        {
          "name": "file",
          "type": "flags.0?InputFile"
        },
        {
          "name": "video",
          "type": "flags.1?InputFile"
        },
        {
          "name": "video_start_ts",
          "type": "flags.2?double"
        },
        {
          "name": "video_emoji_markup",
          "type": "flags.4?VideoSize"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": 2278522671,
      "method": "photos.deletePhotos",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputPhoto>"
        }
      ],
      "type": "Vector<long>"
    },
    {
      "id": 2446144168,
      "method": "photos.getUserPhotos",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": 3779873393,
      "method": "photos.uploadContactProfilePhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "suggest",
          "type": "flags.3?true"
        },
        {
          "name": "save",
          "type": "flags.4?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "file",
          "type": "flags.0?InputFile"
        },
        {
          "name": "video",
          "type": "flags.1?InputFile"
        },
        {
          "name": "video_start_ts",
          "type": "flags.2?double"
        },
        {
          "name": "video_emoji_markup",
          "type": "flags.5?VideoSize"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": 3003426337,
      "method": "upload.saveFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3193124286,
      "method": "upload.getFile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "precise",
          "type": "flags.0?true"
        },
        {
          "name": "cdn_supported",
          "type": "flags.1?true"
        },
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": 3732629309,
      "method": "upload.saveBigFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "file_total_parts",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 619086221,
      "method": "upload.getWebFile",
      "params": [
        {
          "name": "location",
          "type": "InputWebFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.WebFile"
    },
    {
      "id": 962554330,
      "method": "upload.getCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": 2603046056,
      "method": "upload.reuploadCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": 2447130417,
      "method": "upload.getCdnFileHashes",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "long"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": 2438371370,
      "method": "upload.getFileHashes",
      "params": [
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "long"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": 3304659051,
      "method": "help.getConfig",
      "params": [],
      "type": "Config"
    },
    {
      "id": 531836966,
      "method": "help.getNearestDc",
      "params": [],
      "type": "NearestDc"
    },
    {
      "id": 1378703997,
      "method": "help.getAppUpdate",
      "params": [
        {
          "name": "source",
          "type": "string"
        }
      ],
      "type": "help.AppUpdate"
    },
    {
      "id": 1295590211,
      "method": "help.getInviteText",
      "params": [],
      "type": "help.InviteText"
    },
    {
      "id": 2631862477,
      "method": "help.getSupport",
      "params": [],
      "type": "help.Support"
    },
    {
      "id": 3961704397,
      "method": "help.setBotUpdatesStatus",
      "params": [
        {
          "name": "pending_updates_count",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1375900482,
      "method": "help.getCdnConfig",
      "params": [],
      "type": "CdnConfig"
    },
    {
      "id": 1036054804,
      "method": "help.getRecentMeUrls",
      "params": [
        {
          "name": "referer",
          "type": "string"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    {
      "id": 749019089,
      "method": "help.getTermsOfServiceUpdate",
      "params": [],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": 4000511898,
      "method": "help.acceptTermsOfService",
      "params": [
        {
          "name": "id",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1072547679,
      "method": "help.getDeepLinkInfo",
      "params": [
        {
          "name": "path",
          "type": "string"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": 1642330196,
      "method": "help.getAppConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.AppConfig"
    },
    {
      "id": 1862465352,
      "method": "help.saveAppLog",
      "params": [
        {
          "name": "events",
          "type": "Vector<InputAppEvent>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3328290056,
      "method": "help.getPassportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.PassportConfig"
    },
    {
      "id": 3546343212,
      "method": "help.getSupportName",
      "params": [],
      "type": "help.SupportName"
    },
    {
      "id": 59377875,
      "method": "help.getUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": 1723407216,
      "method": "help.editUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": 3231151137,
      "method": "help.getPromoData",
      "params": [],
      "type": "help.PromoData"
    },
    {
      "id": 505748629,
      "method": "help.hidePromoData",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4111317665,
      "method": "help.dismissSuggestion",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "suggestion",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1935116200,
      "method": "help.getCountriesList",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.CountriesList"
    },
    {
      "id": 3088815060,
      "method": "help.getPremiumPromo",
      "params": [],
      "type": "help.PremiumPromo"
    },
    {
      "id": 3665884207,
      "method": "help.getPeerColors",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.PeerColors"
    },
    {
      "id": 2882513405,
      "method": "help.getPeerProfileColors",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.PeerColors"
    },
    {
      "id": 1236468288,
      "method": "help.getTimezonesList",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.TimezonesList"
    },
    {
      "id": 3423619383,
      "method": "channels.readHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2227305806,
      "method": "channels.deleteMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 4098523925,
      "method": "channels.reportSpam",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2911672867,
      "method": "channels.getMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<InputMessage>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 2010044880,
      "method": "channels.getParticipants",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelParticipantsFilter"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": 2695589062,
      "method": "channels.getParticipant",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    {
      "id": 176122811,
      "method": "channels.getChannels",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputChannel>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 141781513,
      "method": "channels.getFullChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": 2432722695,
      "method": "channels.createChannel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.0?true"
        },
        {
          "name": "megagroup",
          "type": "flags.1?true"
        },
        {
          "name": "for_import",
          "type": "flags.3?true"
        },
        {
          "name": "forum",
          "type": "flags.5?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "geo_point",
          "type": "flags.2?InputGeoPoint"
        },
        {
          "name": "address",
          "type": "flags.2?string"
        },
        {
          "name": "ttl_period",
          "type": "flags.4?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3543959810,
      "method": "channels.editAdmin",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1450044624,
      "method": "channels.editTitle",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4046346185,
      "method": "channels.editPhoto",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 283557164,
      "method": "channels.checkUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 890549214,
      "method": "channels.updateUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 615851205,
      "method": "channels.joinChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4164332181,
      "method": "channels.leaveChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3387112788,
      "method": "channels.inviteToChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "messages.InvitedUsers"
    },
    {
      "id": 3222347747,
      "method": "channels.deleteChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3862932971,
      "method": "channels.exportMessageLink",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "grouped",
          "type": "flags.0?true"
        },
        {
          "name": "thread",
          "type": "flags.1?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "ExportedMessageLink"
    },
    {
      "id": 1099781276,
      "method": "channels.toggleSignatures",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "signatures_enabled",
          "type": "flags.0?true"
        },
        {
          "name": "profiles_enabled",
          "type": "flags.1?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4172297903,
      "method": "channels.getAdminedPublicChannels",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "by_location",
          "type": "flags.0?true"
        },
        {
          "name": "check_limit",
          "type": "flags.1?true"
        },
        {
          "name": "for_personal",
          "type": "flags.2?true"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 2531708289,
      "method": "channels.editBanned",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 870184064,
      "method": "channels.getAdminLog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "events_filter",
          "type": "flags.0?ChannelAdminLogEventsFilter"
        },
        {
          "name": "admins",
          "type": "flags.1?Vector<InputUser>"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "min_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    {
      "id": 3935085817,
      "method": "channels.setStickers",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3937786936,
      "method": "channels.readMessageContents",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2611648071,
      "method": "channels.deleteHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "for_everyone",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3938171212,
      "method": "channels.togglePreHistoryHidden",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2202135744,
      "method": "channels.getLeftChannels",
      "params": [
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 4124758904,
      "method": "channels.getGroupsForDiscussion",
      "params": [],
      "type": "messages.Chats"
    },
    {
      "id": 1079520178,
      "method": "channels.setDiscussionGroup",
      "params": [
        {
          "name": "broadcast",
          "type": "InputChannel"
        },
        {
          "name": "group",
          "type": "InputChannel"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2402864415,
      "method": "channels.editCreator",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1491484525,
      "method": "channels.editLocation",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "address",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3990134512,
      "method": "channels.toggleSlowMode",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "seconds",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 300429806,
      "method": "channels.getInactiveChannels",
      "params": [],
      "type": "messages.InactiveChats"
    },
    {
      "id": 187239529,
      "method": "channels.convertToGigagroup",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3884295231,
      "method": "channels.getSendAs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "for_paid_reactions",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "channels.SendAsPeers"
    },
    {
      "id": 913655003,
      "method": "channels.deleteParticipantHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 3838547328,
      "method": "channels.toggleJoinToSend",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1277789622,
      "method": "channels.toggleJoinRequest",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3025988893,
      "method": "channels.reorderUsernames",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "order",
          "type": "Vector<string>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1358053637,
      "method": "channels.toggleUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "active",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 170155475,
      "method": "channels.deactivateAllUsernames",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2754186025,
      "method": "channels.toggleForum",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4094427684,
      "method": "channels.createForumTopic",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "icon_color",
          "type": "flags.0?int"
        },
        {
          "name": "icon_emoji_id",
          "type": "flags.3?long"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "send_as",
          "type": "flags.2?InputPeer"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 233136337,
      "method": "channels.getForumTopics",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "q",
          "type": "flags.0?string"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_topic",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ForumTopics"
    },
    {
      "id": 2961383097,
      "method": "channels.getForumTopicsByID",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "topics",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.ForumTopics"
    },
    {
      "id": 4108296581,
      "method": "channels.editForumTopic",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "topic_id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "icon_emoji_id",
          "type": "flags.1?long"
        },
        {
          "name": "closed",
          "type": "flags.2?Bool"
        },
        {
          "name": "hidden",
          "type": "flags.3?Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1814925350,
      "method": "channels.updatePinnedForumTopic",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "topic_id",
          "type": "int"
        },
        {
          "name": "pinned",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 876830509,
      "method": "channels.deleteTopicHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "top_msg_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 693150095,
      "method": "channels.reorderPinnedForumTopics",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1760814315,
      "method": "channels.toggleAntiSpam",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2823857811,
      "method": "channels.reportAntiSpamFalsePositive",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1785624660,
      "method": "channels.toggleParticipantsHidden",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3635033713,
      "method": "channels.updateColor",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "for_profile",
          "type": "flags.1?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "color",
          "type": "flags.2?int"
        },
        {
          "name": "background_emoji_id",
          "type": "flags.0?long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2537077525,
      "method": "channels.toggleViewForumAsMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 631707458,
      "method": "channels.getChannelRecommendations",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "flags.0?InputChannel"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 4040418984,
      "method": "channels.updateEmojiStatus",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "emoji_status",
          "type": "EmojiStatus"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2906234094,
      "method": "channels.setBoostsToUnblockRestrictions",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "boosts",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1020866743,
      "method": "channels.setEmojiStickers",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2598966553,
      "method": "channels.restrictSponsoredMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "restricted",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3516897403,
      "method": "channels.searchPosts",
      "params": [
        {
          "name": "hashtag",
          "type": "string"
        },
        {
          "name": "offset_rate",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 2854709741,
      "method": "bots.sendCustomRequest",
      "params": [
        {
          "name": "custom_method",
          "type": "string"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "DataJSON"
    },
    {
      "id": 3860938573,
      "method": "bots.answerWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 85399130,
      "method": "bots.setBotCommands",
      "params": [
        {
          "name": "scope",
          "type": "BotCommandScope"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "commands",
          "type": "Vector<BotCommand>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1032708345,
      "method": "bots.resetBotCommands",
      "params": [
        {
          "name": "scope",
          "type": "BotCommandScope"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3813412310,
      "method": "bots.getBotCommands",
      "params": [
        {
          "name": "scope",
          "type": "BotCommandScope"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Vector<BotCommand>"
    },
    {
      "id": 1157944655,
      "method": "bots.setBotMenuButton",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "button",
          "type": "BotMenuButton"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2623597352,
      "method": "bots.getBotMenuButton",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "BotMenuButton"
    },
    {
      "id": 2021942497,
      "method": "bots.setBotBroadcastDefaultAdminRights",
      "params": [
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2455685610,
      "method": "bots.setBotGroupDefaultAdminRights",
      "params": [
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 282013987,
      "method": "bots.setBotInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "flags.2?InputUser"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "name",
          "type": "flags.3?string"
        },
        {
          "name": "about",
          "type": "flags.0?string"
        },
        {
          "name": "description",
          "type": "flags.1?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3705214205,
      "method": "bots.getBotInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "flags.0?InputUser"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "bots.BotInfo"
    },
    {
      "id": 2533994946,
      "method": "bots.reorderUsernames",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "order",
          "type": "Vector<string>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 87861619,
      "method": "bots.toggleUsername",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "active",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 324662502,
      "method": "bots.canSendMessage",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4046644207,
      "method": "bots.allowSendMessage",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 142591463,
      "method": "bots.invokeWebViewCustomMethod",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "custom_method",
          "type": "string"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "DataJSON"
    },
    {
      "id": 3260088722,
      "method": "bots.getPopularAppBots",
      "params": [
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "bots.PopularAppBots"
    },
    {
      "id": 397326170,
      "method": "bots.addPreviewMedia",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "media",
          "type": "InputMedia"
        }
      ],
      "type": "BotPreviewMedia"
    },
    {
      "id": 2233819247,
      "method": "bots.editPreviewMedia",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "new_media",
          "type": "InputMedia"
        }
      ],
      "type": "BotPreviewMedia"
    },
    {
      "id": 755054003,
      "method": "bots.deletePreviewMedia",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "media",
          "type": "Vector<InputMedia>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3056071594,
      "method": "bots.reorderPreviewMedias",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "order",
          "type": "Vector<InputMedia>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1111143341,
      "method": "bots.getPreviewInfo",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "bots.PreviewInfo"
    },
    {
      "id": 2728745293,
      "method": "bots.getPreviewMedias",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "Vector<BotPreviewMedia>"
    },
    {
      "id": 3986632901,
      "method": "bots.updateUserEmojiStatus",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "emoji_status",
          "type": "EmojiStatus"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 115237778,
      "method": "bots.toggleUserEmojiStatusPermission",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1342666121,
      "method": "bots.checkDownloadFileParams",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "file_name",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2960203139,
      "method": "bots.getAdminedBots",
      "params": [],
      "type": "Vector<User>"
    },
    {
      "id": 2005621427,
      "method": "bots.updateStarRefProgram",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "commission_permille",
          "type": "int"
        },
        {
          "name": "duration_months",
          "type": "flags.0?int"
        }
      ],
      "type": "StarRefProgram"
    },
    {
      "id": 2341068733,
      "method": "bots.setCustomVerification",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "enabled",
          "type": "flags.1?true"
        },
        {
          "name": "bot",
          "type": "flags.0?InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "custom_description",
          "type": "flags.2?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2713126933,
      "method": "bots.getBotRecommendations",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "users.Users"
    },
    {
      "id": 924093883,
      "method": "payments.getPaymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "invoice",
          "type": "InputInvoice"
        },
        {
          "name": "theme_params",
          "type": "flags.0?DataJSON"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": 611897804,
      "method": "payments.getPaymentReceipt",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    {
      "id": 3066622251,
      "method": "payments.validateRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "invoice",
          "type": "InputInvoice"
        },
        {
          "name": "info",
          "type": "PaymentRequestedInfo"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    {
      "id": 755192367,
      "method": "payments.sendPaymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "form_id",
          "type": "long"
        },
        {
          "name": "invoice",
          "type": "InputInvoice"
        },
        {
          "name": "requested_info_id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "credentials",
          "type": "InputPaymentCredentials"
        },
        {
          "name": "tip_amount",
          "type": "flags.2?long"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": 578650699,
      "method": "payments.getSavedInfo",
      "params": [],
      "type": "payments.SavedInfo"
    },
    {
      "id": 3627905217,
      "method": "payments.clearSavedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "credentials",
          "type": "flags.0?true"
        },
        {
          "name": "info",
          "type": "flags.1?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 779736953,
      "method": "payments.getBankCardData",
      "params": [
        {
          "name": "number",
          "type": "string"
        }
      ],
      "type": "payments.BankCardData"
    },
    {
      "id": 261206117,
      "method": "payments.exportInvoice",
      "params": [
        {
          "name": "invoice_media",
          "type": "InputMedia"
        }
      ],
      "type": "payments.ExportedInvoice"
    },
    {
      "id": 2163045501,
      "method": "payments.assignAppStoreTransaction",
      "params": [
        {
          "name": "receipt",
          "type": "bytes"
        },
        {
          "name": "purpose",
          "type": "InputStorePaymentPurpose"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3757920467,
      "method": "payments.assignPlayMarketTransaction",
      "params": [
        {
          "name": "receipt",
          "type": "DataJSON"
        },
        {
          "name": "purpose",
          "type": "InputStorePaymentPurpose"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2680266422,
      "method": "payments.canPurchasePremium",
      "params": [
        {
          "name": "purpose",
          "type": "InputStorePaymentPurpose"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 660060756,
      "method": "payments.getPremiumGiftCodeOptions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "boost_peer",
          "type": "flags.0?InputPeer"
        }
      ],
      "type": "Vector<PremiumGiftCodeOption>"
    },
    {
      "id": 2387719361,
      "method": "payments.checkGiftCode",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "payments.CheckedGiftCode"
    },
    {
      "id": 4142032980,
      "method": "payments.applyGiftCode",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4095972389,
      "method": "payments.getGiveawayInfo",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "payments.GiveawayInfo"
    },
    {
      "id": 1609928480,
      "method": "payments.launchPrepaidGiveaway",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "giveaway_id",
          "type": "long"
        },
        {
          "name": "purpose",
          "type": "InputStorePaymentPurpose"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3222194131,
      "method": "payments.getStarsTopupOptions",
      "params": [],
      "type": "Vector<StarsTopupOption>"
    },
    {
      "id": 273665959,
      "method": "payments.getStarsStatus",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "payments.StarsStatus"
    },
    {
      "id": 1775912279,
      "method": "payments.getStarsTransactions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inbound",
          "type": "flags.0?true"
        },
        {
          "name": "outbound",
          "type": "flags.1?true"
        },
        {
          "name": "ascending",
          "type": "flags.2?true"
        },
        {
          "name": "subscription_id",
          "type": "flags.3?string"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "payments.StarsStatus"
    },
    {
      "id": 2040056084,
      "method": "payments.sendStarsForm",
      "params": [
        {
          "name": "form_id",
          "type": "long"
        },
        {
          "name": "invoice",
          "type": "InputInvoice"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": 632196938,
      "method": "payments.refundStarsCharge",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "charge_id",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3642751702,
      "method": "payments.getStarsRevenueStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "payments.StarsRevenueStats"
    },
    {
      "id": 331081907,
      "method": "payments.getStarsRevenueWithdrawalUrl",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "stars",
          "type": "long"
        },
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "payments.StarsRevenueWithdrawalUrl"
    },
    {
      "id": 3520589765,
      "method": "payments.getStarsRevenueAdsAccountUrl",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "payments.StarsRevenueAdsAccountUrl"
    },
    {
      "id": 662973742,
      "method": "payments.getStarsTransactionsByID",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<InputStarsTransaction>"
        }
      ],
      "type": "payments.StarsStatus"
    },
    {
      "id": 3553192904,
      "method": "payments.getStarsGiftOptions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "flags.0?InputUser"
        }
      ],
      "type": "Vector<StarsGiftOption>"
    },
    {
      "id": 52761285,
      "method": "payments.getStarsSubscriptions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "missing_balance",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "payments.StarsStatus"
    },
    {
      "id": 3346466936,
      "method": "payments.changeStarsSubscription",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "subscription_id",
          "type": "string"
        },
        {
          "name": "canceled",
          "type": "flags.0?Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3428576179,
      "method": "payments.fulfillStarsSubscription",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "subscription_id",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3172924734,
      "method": "payments.getStarsGiveawayOptions",
      "params": [],
      "type": "Vector<StarsGiveawayOption>"
    },
    {
      "id": 3293984144,
      "method": "payments.getStarGifts",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "payments.StarGifts"
    },
    {
      "id": 707422588,
      "method": "payments.saveStarGift",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unsave",
          "type": "flags.0?true"
        },
        {
          "name": "stargift",
          "type": "InputSavedStarGift"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1958676331,
      "method": "payments.convertStarGift",
      "params": [
        {
          "name": "stargift",
          "type": "InputSavedStarGift"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1845102114,
      "method": "payments.botCancelStarsSubscription",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "restore",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "charge_id",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1483318611,
      "method": "payments.getConnectedStarRefBots",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_date",
          "type": "flags.2?int"
        },
        {
          "name": "offset_link",
          "type": "flags.2?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "payments.ConnectedStarRefBots"
    },
    {
      "id": 3084490992,
      "method": "payments.getConnectedStarRefBot",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "payments.ConnectedStarRefBots"
    },
    {
      "id": 225134839,
      "method": "payments.getSuggestedStarRefBots",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "order_by_revenue",
          "type": "flags.0?true"
        },
        {
          "name": "order_by_date",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "payments.SuggestedStarRefBots"
    },
    {
      "id": 2127901834,
      "method": "payments.connectStarRefBot",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "payments.ConnectedStarRefBots"
    },
    {
      "id": 3841762467,
      "method": "payments.editConnectedStarRefBot",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "payments.ConnectedStarRefBots"
    },
    {
      "id": 2627386545,
      "method": "payments.getStarGiftUpgradePreview",
      "params": [
        {
          "name": "gift_id",
          "type": "long"
        }
      ],
      "type": "payments.StarGiftUpgradePreview"
    },
    {
      "id": 2933318901,
      "method": "payments.upgradeStarGift",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "keep_original_details",
          "type": "flags.0?true"
        },
        {
          "name": "stargift",
          "type": "InputSavedStarGift"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2132285290,
      "method": "payments.transferStarGift",
      "params": [
        {
          "name": "stargift",
          "type": "InputSavedStarGift"
        },
        {
          "name": "to_id",
          "type": "InputPeer"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2711047538,
      "method": "payments.getUniqueStarGift",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "payments.UniqueStarGift"
    },
    {
      "id": 595791337,
      "method": "payments.getSavedStarGifts",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_unsaved",
          "type": "flags.0?true"
        },
        {
          "name": "exclude_saved",
          "type": "flags.1?true"
        },
        {
          "name": "exclude_unlimited",
          "type": "flags.2?true"
        },
        {
          "name": "exclude_limited",
          "type": "flags.3?true"
        },
        {
          "name": "exclude_unique",
          "type": "flags.4?true"
        },
        {
          "name": "sort_by_value",
          "type": "flags.5?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "payments.SavedStarGifts"
    },
    {
      "id": 3025510662,
      "method": "payments.getSavedStarGift",
      "params": [
        {
          "name": "stargift",
          "type": "Vector<InputSavedStarGift>"
        }
      ],
      "type": "payments.SavedStarGifts"
    },
    {
      "id": 3496907688,
      "method": "payments.getStarGiftWithdrawalUrl",
      "params": [
        {
          "name": "stargift",
          "type": "InputSavedStarGift"
        },
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "payments.StarGiftWithdrawalUrl"
    },
    {
      "id": 1626009505,
      "method": "payments.toggleChatStarGiftNotifications",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "enabled",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2418125671,
      "method": "stickers.createStickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "emojis",
          "type": "flags.5?true"
        },
        {
          "name": "text_color",
          "type": "flags.6?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "thumb",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "stickers",
          "type": "Vector<InputStickerSetItem>"
        },
        {
          "name": "software",
          "type": "flags.3?string"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 4151709521,
      "method": "stickers.removeStickerFromSet",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 4290172106,
      "method": "stickers.changeStickerPosition",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        },
        {
          "name": "position",
          "type": "int"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 2253651646,
      "method": "stickers.addStickerToSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "sticker",
          "type": "InputStickerSetItem"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 2808763282,
      "method": "stickers.setStickerSetThumb",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "thumb",
          "type": "flags.0?InputDocument"
        },
        {
          "name": "thumb_document_id",
          "type": "flags.1?long"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 676017721,
      "method": "stickers.checkShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1303364867,
      "method": "stickers.suggestShortName",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "stickers.SuggestedShortName"
    },
    {
      "id": 4115889852,
      "method": "stickers.changeSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sticker",
          "type": "InputDocument"
        },
        {
          "name": "emoji",
          "type": "flags.0?string"
        },
        {
          "name": "mask_coords",
          "type": "flags.1?MaskCoords"
        },
        {
          "name": "keywords",
          "type": "flags.2?string"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 306912256,
      "method": "stickers.renameStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 2272281492,
      "method": "stickers.deleteStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1184253338,
      "method": "stickers.replaceSticker",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        },
        {
          "name": "new_sticker",
          "type": "InputStickerSetItem"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 1430593449,
      "method": "phone.getCallConfig",
      "params": [],
      "type": "DataJSON"
    },
    {
      "id": 2797887500,
      "method": "phone.requestCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "conference_call",
          "type": "flags.1?InputGroupCall"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 1003664544,
      "method": "phone.acceptCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 788404002,
      "method": "phone.confirmCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_a",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 399855457,
      "method": "phone.receivedCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2999697856,
      "method": "phone.discardCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "reason",
          "type": "PhoneCallDiscardReason"
        },
        {
          "name": "connection_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1508562471,
      "method": "phone.setCallRating",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_initiative",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "rating",
          "type": "int"
        },
        {
          "name": "comment",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 662363518,
      "method": "phone.saveCallDebug",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "debug",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4286223235,
      "method": "phone.sendSignalingData",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1221445336,
      "method": "phone.createGroupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "rtmp_stream",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "schedule_date",
          "type": "flags.1?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3592297971,
      "method": "phone.joinGroupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "muted",
          "type": "flags.0?true"
        },
        {
          "name": "video_stopped",
          "type": "flags.2?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "join_as",
          "type": "InputPeer"
        },
        {
          "name": "invite_hash",
          "type": "flags.1?string"
        },
        {
          "name": "key_fingerprint",
          "type": "flags.3?long"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1342404601,
      "method": "phone.leaveGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "source",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2067345760,
      "method": "phone.inviteToGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2054648117,
      "method": "phone.discardGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1958458429,
      "method": "phone.toggleGroupCallSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reset_invite_hash",
          "type": "flags.1?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "join_muted",
          "type": "flags.0?Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 68699611,
      "method": "phone.getGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "phone.GroupCall"
    },
    {
      "id": 3310934187,
      "method": "phone.getGroupParticipants",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "ids",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "sources",
          "type": "Vector<int>"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "phone.GroupParticipants"
    },
    {
      "id": 3046963575,
      "method": "phone.checkGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "sources",
          "type": "Vector<int>"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 4045981448,
      "method": "phone.toggleGroupCallRecord",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "start",
          "type": "flags.0?true"
        },
        {
          "name": "video",
          "type": "flags.2?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "video_portrait",
          "type": "flags.2?Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2770811583,
      "method": "phone.editGroupCallParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        },
        {
          "name": "muted",
          "type": "flags.0?Bool"
        },
        {
          "name": "volume",
          "type": "flags.1?int"
        },
        {
          "name": "raise_hand",
          "type": "flags.2?Bool"
        },
        {
          "name": "video_stopped",
          "type": "flags.3?Bool"
        },
        {
          "name": "video_paused",
          "type": "flags.4?Bool"
        },
        {
          "name": "presentation_paused",
          "type": "flags.5?Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 480685066,
      "method": "phone.editGroupCallTitle",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4017889594,
      "method": "phone.getGroupCallJoinAs",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "phone.JoinAsPeers"
    },
    {
      "id": 3869926527,
      "method": "phone.exportGroupCallInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_self_unmute",
          "type": "flags.0?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "phone.ExportedGroupCallInvite"
    },
    {
      "id": 563885286,
      "method": "phone.toggleGroupCallStartSubscription",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "subscribed",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1451287362,
      "method": "phone.startScheduledGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1465786252,
      "method": "phone.saveDefaultGroupCallJoinAs",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "join_as",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3421137860,
      "method": "phone.joinGroupCallPresentation",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 475058500,
      "method": "phone.leaveGroupCallPresentation",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 447879488,
      "method": "phone.getGroupCallStreamChannels",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "phone.GroupCallStreamChannels"
    },
    {
      "id": 3736316863,
      "method": "phone.getGroupCallStreamRtmpUrl",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "revoke",
          "type": "Bool"
        }
      ],
      "type": "phone.GroupCallStreamRtmpUrl"
    },
    {
      "id": 1092913030,
      "method": "phone.saveCallLog",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "file",
          "type": "InputFile"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3754494379,
      "method": "phone.createConferenceCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 4075959050,
      "method": "langpack.getLangPack",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": 4025104387,
      "method": "langpack.getStrings",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "keys",
          "type": "Vector<string>"
        }
      ],
      "type": "Vector<LangPackString>"
    },
    {
      "id": 3449309861,
      "method": "langpack.getDifference",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": 1120311183,
      "method": "langpack.getLanguages",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        }
      ],
      "type": "Vector<LangPackLanguage>"
    },
    {
      "id": 1784243458,
      "method": "langpack.getLanguage",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    },
    {
      "id": 1749536939,
      "method": "folders.editPeerFolders",
      "params": [
        {
          "name": "folder_peers",
          "type": "Vector<InputFolderPeer>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2873246746,
      "method": "stats.getBroadcastStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "stats.BroadcastStats"
    },
    {
      "id": 1646092192,
      "method": "stats.loadAsyncGraph",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "x",
          "type": "flags.0?long"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 3705636359,
      "method": "stats.getMegagroupStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "stats.MegagroupStats"
    },
    {
      "id": 1595212100,
      "method": "stats.getMessagePublicForwards",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stats.PublicForwards"
    },
    {
      "id": 3068175349,
      "method": "stats.getMessageStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "stats.MessageStats"
    },
    {
      "id": 927985472,
      "method": "stats.getStoryStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "stats.StoryStats"
    },
    {
      "id": 2789441270,
      "method": "stats.getStoryPublicForwards",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stats.PublicForwards"
    },
    {
      "id": 4152946201,
      "method": "stats.getBroadcastRevenueStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "stats.BroadcastRevenueStats"
    },
    {
      "id": 2650077869,
      "method": "stats.getBroadcastRevenueWithdrawalUrl",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "stats.BroadcastRevenueWithdrawalUrl"
    },
    {
      "id": 1889078125,
      "method": "stats.getBroadcastRevenueTransactions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stats.BroadcastRevenueTransactions"
    },
    {
      "id": 2222081934,
      "method": "chatlists.exportChatlistInvite",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "chatlists.ExportedChatlistInvite"
    },
    {
      "id": 1906072670,
      "method": "chatlists.deleteExportedInvite",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        },
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1698543165,
      "method": "chatlists.editExportedInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chatlist",
          "type": "InputChatlist"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "peers",
          "type": "flags.2?Vector<InputPeer>"
        }
      ],
      "type": "ExportedChatlistInvite"
    },
    {
      "id": 3456359043,
      "method": "chatlists.getExportedInvites",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        }
      ],
      "type": "chatlists.ExportedInvites"
    },
    {
      "id": 1103171583,
      "method": "chatlists.checkChatlistInvite",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "chatlists.ChatlistInvite"
    },
    {
      "id": 2796675994,
      "method": "chatlists.joinChatlistInvite",
      "params": [
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2302776609,
      "method": "chatlists.getChatlistUpdates",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        }
      ],
      "type": "chatlists.ChatlistUpdates"
    },
    {
      "id": 3767138549,
      "method": "chatlists.joinChatlistUpdates",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        },
        {
          "name": "peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1726252795,
      "method": "chatlists.hideChatlistUpdates",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4257011476,
      "method": "chatlists.getLeaveChatlistSuggestions",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        }
      ],
      "type": "Vector<Peer>"
    },
    {
      "id": 1962598714,
      "method": "chatlists.leaveChatlist",
      "params": [
        {
          "name": "chatlist",
          "type": "InputChatlist"
        },
        {
          "name": "peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3353337821,
      "method": "stories.canSendStory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3840305483,
      "method": "stories.sendStory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "noforwards",
          "type": "flags.4?true"
        },
        {
          "name": "fwd_modified",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "media_areas",
          "type": "flags.5?Vector<MediaArea>"
        },
        {
          "name": "caption",
          "type": "flags.0?string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "privacy_rules",
          "type": "Vector<InputPrivacyRule>"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "period",
          "type": "flags.3?int"
        },
        {
          "name": "fwd_from_id",
          "type": "flags.6?InputPeer"
        },
        {
          "name": "fwd_from_story",
          "type": "flags.6?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3045308998,
      "method": "stories.editStory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "media",
          "type": "flags.0?InputMedia"
        },
        {
          "name": "media_areas",
          "type": "flags.3?Vector<MediaArea>"
        },
        {
          "name": "caption",
          "type": "flags.1?string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "privacy_rules",
          "type": "flags.2?Vector<InputPrivacyRule>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2925124447,
      "method": "stories.deleteStories",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 2591400431,
      "method": "stories.togglePinned",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "pinned",
          "type": "Bool"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 4004566565,
      "method": "stories.getAllStories",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "next",
          "type": "flags.1?true"
        },
        {
          "name": "hidden",
          "type": "flags.2?true"
        },
        {
          "name": "state",
          "type": "flags.0?string"
        }
      ],
      "type": "stories.AllStories"
    },
    {
      "id": 1478600156,
      "method": "stories.getPinnedStories",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stories.Stories"
    },
    {
      "id": 3023380502,
      "method": "stories.getStoriesArchive",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stories.Stories"
    },
    {
      "id": 1467271796,
      "method": "stories.getStoriesByID",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "stories.Stories"
    },
    {
      "id": 2082822084,
      "method": "stories.toggleAllStoriesHidden",
      "params": [
        {
          "name": "hidden",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2773932744,
      "method": "stories.readStories",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 2986511099,
      "method": "stories.incrementStoryViews",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2127707223,
      "method": "stories.getStoryViewsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "just_contacts",
          "type": "flags.0?true"
        },
        {
          "name": "reactions_first",
          "type": "flags.2?true"
        },
        {
          "name": "forwards_first",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "q",
          "type": "flags.1?string"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stories.StoryViewsList"
    },
    {
      "id": 685862088,
      "method": "stories.getStoriesViews",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "stories.StoryViews"
    },
    {
      "id": 2072899360,
      "method": "stories.exportStoryLink",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "ExportedStoryLink"
    },
    {
      "id": 433646405,
      "method": "stories.report",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "ReportResult"
    },
    {
      "id": 1471926630,
      "method": "stories.activateStealthMode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "past",
          "type": "flags.0?true"
        },
        {
          "name": "future",
          "type": "flags.1?true"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2144810674,
      "method": "stories.sendReaction",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "add_to_recent",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "story_id",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "Reaction"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 743103056,
      "method": "stories.getPeerStories",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "stories.PeerStories"
    },
    {
      "id": 2606426105,
      "method": "stories.getAllReadPeerStories",
      "params": [],
      "type": "Updates"
    },
    {
      "id": 1398375363,
      "method": "stories.getPeerMaxIDs",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 2775223136,
      "method": "stories.getChatsToSend",
      "params": [],
      "type": "messages.Chats"
    },
    {
      "id": 3171161540,
      "method": "stories.togglePeerStoriesHidden",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "hidden",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3115485215,
      "method": "stories.getStoryReactionsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "forwards_first",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "reaction",
          "type": "flags.0?Reaction"
        },
        {
          "name": "offset",
          "type": "flags.1?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stories.StoryReactionsList"
    },
    {
      "id": 187268763,
      "method": "stories.togglePinnedToTop",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3514894599,
      "method": "stories.searchPosts",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "hashtag",
          "type": "flags.0?string"
        },
        {
          "name": "area",
          "type": "flags.1?MediaArea"
        },
        {
          "name": "peer",
          "type": "flags.2?InputPeer"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "stories.FoundStories"
    },
    {
      "id": 1626764896,
      "method": "premium.getBoostsList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gifts",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "premium.BoostsList"
    },
    {
      "id": 199719754,
      "method": "premium.getMyBoosts",
      "params": [],
      "type": "premium.MyBoosts"
    },
    {
      "id": 1803396934,
      "method": "premium.applyBoost",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "slots",
          "type": "flags.0?Vector<int>"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "premium.MyBoosts"
    },
    {
      "id": 70197089,
      "method": "premium.getBoostsStatus",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "premium.BoostsStatus"
    },
    {
      "id": 965037343,
      "method": "premium.getUserBoosts",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "premium.BoostsList"
    },
    {
      "id": 249313744,
      "method": "smsjobs.isEligibleToJoin",
      "params": [],
      "type": "smsjobs.EligibilityToJoin"
    },
    {
      "id": 2806959661,
      "method": "smsjobs.join",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2560142707,
      "method": "smsjobs.leave",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 155164863,
      "method": "smsjobs.updateSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "allow_international",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 279353576,
      "method": "smsjobs.getStatus",
      "params": [],
      "type": "smsjobs.Status"
    },
    {
      "id": 2005766191,
      "method": "smsjobs.getSmsJob",
      "params": [
        {
          "name": "job_id",
          "type": "string"
        }
      ],
      "type": "SmsJob"
    },
    {
      "id": 1327415076,
      "method": "smsjobs.finishJob",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "job_id",
          "type": "string"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3189671354,
      "method": "fragment.getCollectibleInfo",
      "params": [
        {
          "name": "collectible",
          "type": "InputCollectible"
        }
      ],
      "type": "fragment.CollectibleInfo"
    }
  ]
}
