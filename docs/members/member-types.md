---
lang: en-US
layout: doc
---

# Member Types

Each member of a channel has a member type that defines their access within the channel. By default, when you add a member, its member type is Full Collaborator, but you may change it. 

<table>
  <colgroup>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
  </colgroup>
  <tbody>
    <tr>
      <td><br></td>
      <td style="min-width:200px"><strong>Messaging access</strong></td>
      <td style="min-width:200px"><strong>Member access</strong></td>
      <td style="min-width:200px">
        <p><strong>Settings access</strong></p>
        <p>(for settings, see&nbsp;<a href="/channels/channel-settings-for-a-channel-owner">Channel settings for a channel owner</a>)</p>
      </td>
      <td style="min-width:200px">
        <p><strong>Files access</strong></p>
        <p>(upload, download, move, delete)</p>
      </td>
      <td style="min-width:200px">
        <p><strong>Action access</strong></p>
        <p>(add, delete, change status)</p>
      </td>
      <td style="min-width:200px"><strong>Wiki Access</strong></td>
      <td style="min-width:200px"><strong>Export channel</strong></td>
      <td style="min-width:200px"><strong>Close or<br>delete<br>channel</strong></td>
      <td style="min-width:200px"><strong>Leave channel</strong></td>
    </tr>
    <tr>
      <td><strong>Owner</strong></td>
      <td>Post messages in channel or through email.</td>
      <td>Add, delete, and change status of members.</td>
      <td>All settings.</td>
      <td>Full</td>
      <td>Full</td>
      <td>Edit</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Admin</strong></td>
      <td>Post messages in channel or through email.</td>
      <td>Add, delete, and change status of members (except self and owner).</td>
      <td>All settings.</td>
      <td>Full</td>
      <td>Full</td>
      <td>Edit</td>
      <td>Yes</td>
      <td><span>No</span></td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Manager</strong></td>
      <td>Post messages in channel or through email.</td>
      <td><span>Add members. Delete members other than Owner and self. Cannot change status of members.</span></td>
      <td><span>All settings.</span></td>
      <td>Full</td>
      <td>Full</td>
      <td>Edit</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Full Collaborator</strong></td>
      <td>Post messages in channel or through email.</td>
      <td><span>View other members.</span></td>
      <td>Copy email address for channel.</td>
      <td>Full</td>
      <td>Full</td>
      <td>Edit</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Collaborator</strong></td>
      <td>Post messages in channel or through email.</td>
      <td>View other members.</td>
      <td>Copy email address for channel.</td>
      <td>
        <p>Full<br><br></p>
      </td>
      <td>
        <p>View</p>
      </td>
      <td><span>View</span></td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Viewer</strong></td>
      <td><span>View messages in channel.</span><br><span>Post messages through email.</span></td>
      <td>View other members.</td>
      <td>Copy email address for channel.</td>
      <td><span>Download, send (and upload) to channel through email.</span></td>
      <td><span>View</span></td>
      <td>View</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>